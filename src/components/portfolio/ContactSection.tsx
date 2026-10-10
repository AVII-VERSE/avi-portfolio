import { useRef, useState } from "react";
import ContactSvg from "./ContactSvg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/animations/Reveal";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";
import { getEmailJSConfig } from "@/lib/env";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setIsLoading(true);

    try {
      const config = getEmailJSConfig();

      if (!formRef.current) {
        setError(true);
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Form error",
          description: "Please try refreshing the page.",
        });
        return;
      }

      await emailjs.sendForm(config.serviceId, config.templateId, formRef.current, {
        publicKey: config.publicKey,
      });

      setSuccess(true);
      toast({
        title: "Message sent",
        description: "Thanks! I'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setError(true);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again in a moment.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 flex items-center">
<div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center">Contact Me</h2>
          <p className="text-center text-foreground/70 mt-4">
            Open to VAPT, red teaming, Linux, network security, and security automation opportunities.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
          <Reveal>
            <div className="w-full max-w-sm mx-auto space-y-6">
              <ContactSvg />
              <div className="neobrutalist-card p-6 space-y-3 text-center">
                <p className="font-bold text-foreground">Avinash Singh</p>
                <a className="block text-primary hover:underline" href="mailto:as8009067@gmail.com">as8009067@gmail.com</a>
                <p className="text-foreground/70">Surat, Gujarat, India</p>
                <div className="flex justify-center gap-4 pt-2 text-sm">
                  <a className="text-primary hover:underline" href="https://linkedin.com/in/singhavinash10" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="text-primary hover:underline" href="https://github.com/AVII-VERSE" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a className="text-primary hover:underline" href="https://medium.com/@avinashsingh10" target="_blank" rel="noopener noreferrer">Medium</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="neobrutalist-card p-4 sm:p-6 md:p-8 relative overflow-hidden bg-card">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80">Name</Label>
                    <Input
                      id="name"
                      name="user_username"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="mt-2 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground/80">Email</Label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="mt-2 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground/80">Message</Label>
                  <Textarea
                    id="message"
                    name="user_message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="mt-2 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40"
                    rows={5}
                    required
                  />
                </div>

                <input type="hidden" name="user_name" value={name} />
                <input type="hidden" name="from_name" value={name} />
                <input type="hidden" name="reply_to" value={email} />
                <input type="hidden" name="from_email" value={email} />
                <input type="hidden" name="message" value={message} />

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full neobrutalist-button neobrutalist-button-primary inline-flex items-center justify-center gap-2 text-base py-6"
                >
                  <span className="relative z-10">{isLoading ? "Sending..." : "Send Message"}</span>
                  {!isLoading && <Send size={18} className="relative z-10" />}
                </Button>
                {success && (
                  <p role="status" aria-live="polite" className="text-sm mt-2 border-2 border-green-500/30 bg-green-500/10 text-green-400 px-3 py-2">Your message has been sent!</p>
                )}
                {error && (
                  <p role="status" aria-live="polite" className="text-sm mt-2 border-2 border-red-500/30 bg-red-500/10 text-red-400 px-3 py-2">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;