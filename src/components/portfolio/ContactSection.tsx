import { useRef, useState } from "react";
import ContactSvg from "./ContactSvg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/animations/Reveal";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";
import { Send, CheckCircle2 } from "lucide-react";
import { isEmailJSConfigured, getEmailJSConfig } from "@/lib/env";
import { EMAIL } from "@/constants";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
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

    const emailSubject = subject.trim()
      ? `[Portfolio Contact] ${subject.trim()}`
      : `[Portfolio Contact] Message from ${name.trim()}`;

    // 1. If EmailJS is configured, send via EmailJS
    if (isEmailJSConfigured() && formRef.current) {
      try {
        const config = getEmailJSConfig();
        await emailjs.sendForm(config.serviceId, config.templateId, formRef.current, {
          publicKey: config.publicKey,
        });

        setSuccess(true);
        toast({
          title: "Message sent!",
          description: "Thanks! I'll get back to you soon.",
        });
        setName("");
        setEmail("");
        setSubject("");
        setCompany("");
        setMessage("");
        formRef.current.reset();
        setIsLoading(false);
        return;
      } catch (err) {
        console.warn("EmailJS delivery failed, falling back to direct inbox delivery...", err);
      }
    }

    // 2. Direct Inbox Delivery to as8009067@gmail.com via FormSubmit
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim() || "Portfolio Contact Inquiry",
          organization_or_company: company.trim() || "Individual / Not specified",
          message: message.trim(),
          _subject: emailSubject,
          _replyto: email.trim(),
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSuccess(true);
        toast({
          title: "Message delivered!",
          description: "Your message has been sent directly to Avinash's inbox.",
        });
        setName("");
        setEmail("");
        setSubject("");
        setCompany("");
        setMessage("");
        if (formRef.current) formRef.current.reset();
      } else {
        throw new Error("Delivery response not ok");
      }
    } catch (err) {
      console.error("Direct delivery error:", err);
      setError(true);
      toast({
        variant: "destructive",
        title: "Direct delivery fallback",
        description: "Opening your email app to send directly...",
      });

      // 3. Fallback: Open mail app with pre-filled content
      const fallbackMailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(
        `Hi Avinash,\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`
      )}`;
      window.location.href = fallbackMailto;
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
          {/* Left Column: Illustration & Info Card */}
          <Reveal>
            <div className="w-full max-w-sm mx-auto space-y-6">
              <ContactSvg />
              <div className="neobrutalist-card p-6 space-y-3 text-center">
                <p className="font-bold text-foreground">Avinash Singh</p>
                <a className="block text-primary hover:underline" href="mailto:as8009067@gmail.com">
                  as8009067@gmail.com
                </a>
                <p className="text-foreground/70">Surat, Gujarat, India</p>
                <div className="flex justify-center gap-4 pt-2 text-sm">
                  <a
                    className="text-primary hover:underline"
                    href="https://linkedin.com/in/singhavinash10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="text-primary hover:underline"
                    href="https://github.com/AVII-VERSE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="text-primary hover:underline"
                    href="https://medium.com/@avinashsingh10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Contact Form with Added Fields */}
          <Reveal>
            <div className="neobrutalist-card p-4 sm:p-6 md:p-8 relative overflow-hidden bg-card">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80">
                      Name
                    </Label>
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
                    <Label htmlFor="email" className="text-foreground/80">
                      Email
                    </Label>
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

                {/* Row 2: Subject & Organization / Company */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="subject" className="text-foreground/80">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="user_subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. VAPT Audit / Job Role"
                      className="mt-2 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-foreground/80">
                      Company / Organization
                    </Label>
                    <Input
                      id="company"
                      name="user_company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Company Name or Self"
                      className="mt-2 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <Label htmlFor="message" className="text-foreground/80">
                    Message
                  </Label>
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

                {/* Hidden fields for EmailJS compatibility */}
                <input type="hidden" name="user_name" value={name} />
                <input type="hidden" name="from_name" value={name} />
                <input type="hidden" name="reply_to" value={email} />
                <input type="hidden" name="from_email" value={email} />
                <input type="hidden" name="message" value={message} />
                <input type="hidden" name="subject" value={subject} />
                <input type="hidden" name="company" value={company} />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full neobrutalist-button neobrutalist-button-primary inline-flex items-center justify-center gap-2 text-base py-6"
                >
                  <span className="relative z-10">{isLoading ? "Sending..." : "Send Message"}</span>
                  {!isLoading && <Send size={18} className="relative z-10" />}
                </Button>

                {success && (
                  <div className="text-sm mt-2 border-2 border-green-500/30 bg-green-500/10 text-green-400 px-3 py-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-green-400" />
                    <span>Your message has been sent directly to Avinash!</span>
                  </div>
                )}
                {error && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="text-sm mt-2 border-2 border-red-500/30 bg-red-500/10 text-red-400 px-3 py-2"
                  >
                    Something went wrong. Redirecting to mail app...
                  </p>
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