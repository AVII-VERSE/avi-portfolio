import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/animations/Reveal";
import { toast } from "@/components/ui/use-toast";
import { 
  Send, 
  Mail, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  Linkedin,
  Github,
  BookOpen
} from "lucide-react";
import { EMAIL, SOCIAL_LINKS } from "@/constants";

const INQUIRY_TYPES = [
  "Full-Time Role",
  "VAPT / Security Audit",
  "Security Automation",
  "General Inquiry"
] as const;

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [inquiryType, setInquiryType] = useState<string>("Full-Time Role");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast({
      title: "Email copied",
      description: `${EMAIL} copied to clipboard!`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);

    const emailSubject = subject.trim() 
      ? `[Portfolio Contact] ${subject} (${inquiryType})` 
      : `[Portfolio Contact] New ${inquiryType} from ${name}`;

    try {
      // Primary: Send directly to Avinash's Gmail inbox via formsubmit.co
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          inquiry_type: inquiryType,
          subject: subject.trim() || inquiryType,
          message: message.trim(),
          _subject: emailSubject,
          _replyto: email.trim(),
          _captcha: "false",
          _template: "table",
        }),
      });

      if (response.ok) {
        setSuccess(true);
        toast({
          title: "Message sent successfully!",
          description: "Your message has been delivered directly to Avinash's inbox.",
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Delivery failed");
      }
    } catch (err) {
      console.warn("FormSubmit delivery issue, falling back to direct mailto", err);
      // Fallback: open user's email client directly with filled details
      const fallbackMailto = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
        `Hi Avinash,\n\nName: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`
      )}`;
      
      window.location.href = fallbackMailto;

      toast({
        title: "Opening Email Client",
        description: "Redirecting to your mail app to send the message directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 flex items-center">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border-2 border-primary/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                Get In Touch · Let's Connect
              </span>
            </div>
            <h2 className="section-title">Contact Me</h2>
            <p className="text-foreground/75 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
              Open to VAPT, Red Teaming, Linux & Network Security, and Security Automation opportunities. Send a message directly to my inbox below.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal delay={0.1}>
              {/* Direct Email Card */}
              <div className="neobrutalist-card p-6 bg-card border-2 border-border shadow-brutal space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-primary/10 border border-primary/30 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={copyEmail}
                    className="neobrutalist-button neobrutalist-button-secondary px-3 py-1.5 text-xs inline-flex items-center gap-1.5"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-500 relative z-10" />
                        <span className="relative z-10 font-bold text-green-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 relative z-10" />
                        <span className="relative z-10 font-bold">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-base sm:text-lg font-bold text-foreground hover:text-primary transition-colors block mt-1"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div className="pt-2 border-t border-border flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Replies typically within 24 hours</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              {/* Location & Relocation Card */}
              <div className="neobrutalist-card p-6 bg-card border-2 border-border shadow-brutal space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 border border-primary/30 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Base Location
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Surat, Gujarat, India
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-muted/40 border border-border">
                    ✓ Open to Remote
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-muted/40 border border-border">
                    ✓ Open to Relocation
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              {/* Social Channels */}
              <div className="neobrutalist-card p-6 bg-card border-2 border-border shadow-brutal space-y-4">
                <p className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                  // Professional Networks
                </p>
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <a
                    href="https://linkedin.com/in/singhavinash10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border hover:border-primary transition-colors flex flex-col items-center justify-center gap-1.5 text-center group hover:bg-primary/5"
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="https://github.com/AVII-VERSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border hover:border-primary transition-colors flex flex-col items-center justify-center gap-1.5 text-center group hover:bg-primary/5"
                  >
                    <Github className="w-4 h-4 text-primary" />
                    <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://medium.com/@avinashsingh10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border hover:border-primary transition-colors flex flex-col items-center justify-center gap-1.5 text-center group hover:bg-primary/5"
                  >
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">
                      Medium
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="neobrutalist-card p-6 sm:p-8 bg-card border-2 border-border shadow-brutal relative">
                <div className="pb-6 border-b border-border mb-6">
                  <h3 className="text-xl font-black text-foreground">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fill out the form below and it will be sent straight to my personal email inbox.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Inquiry Type Chips */}
                  <div>
                    <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 block">
                      Inquiry Category
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {INQUIRY_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`px-3 py-1.5 text-xs font-semibold transition-all border ${
                            inquiryType === type
                              ? "bg-primary text-primary-foreground border-primary shadow-sm"
                              : "bg-muted/30 text-foreground/80 border-border hover:border-primary/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-xs font-bold text-foreground">
                        Your Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="mt-1.5 bg-background border-2 border-border focus-visible:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="text-xs font-bold text-foreground">
                        Your Email <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="mt-1.5 bg-background border-2 border-border focus-visible:border-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="contact-subject" className="text-xs font-bold text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Junior Security Analyst Role / Project Opportunity"
                      className="mt-1.5 bg-background border-2 border-border focus-visible:border-primary"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="contact-message" className="text-xs font-bold text-foreground">
                      Your Message <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      rows={5}
                      className="mt-1.5 bg-background border-2 border-border focus-visible:border-primary resize-y"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full neobrutalist-button neobrutalist-button-primary py-4 text-sm font-bold inline-flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                    >
                      <span className="relative z-10">
                        {isLoading ? "Delivering to Inbox..." : "Send Message (Direct to Email)"}
                      </span>
                      <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Success State */}
                  {success && (
                    <div className="p-4 bg-green-500/10 border-2 border-green-500/40 text-green-400 text-xs flex items-start gap-2.5 animate-fade-in">
                      <ShieldCheck className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Message sent successfully!</p>
                        <p className="text-green-400/80 mt-0.5">
                          Your message has been delivered directly to {EMAIL}. I'll reply back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Alternative quick mail link */}
                  <div className="text-center pt-2">
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                        subject || `Inquiry from Portfolio (${inquiryType})`
                      )}&body=${encodeURIComponent(message)}`}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 font-mono"
                    >
                      <span>Prefer sending via Gmail / Outlook client?</span>
                      <ExternalLink className="w-3 h-3 text-primary" />
                    </a>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;