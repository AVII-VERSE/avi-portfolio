import { ExternalLink, BookOpen, Clock, ShieldAlert, ArrowUpRight } from "lucide-react";
import MediumIcon from "@/components/icons/MediumIcon";
import { Reveal, FadeInItem, FadeInStagger } from "@/components/animations/Reveal";

interface Article {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  readTime: string;
  category: string;
  tags: string[];
}

const articles: Article[] = [
  {
    number: "01",
    category: "Incident Response & Persistence",
    title: "Patching the Vulnerability Doesn't Mean the Attack is Over",
    subtitle: "Post-Exploitation Persistence & Threat Hunting",
    description:
      "A deep technical breakdown showing why simply deploying a security patch is never enough. Explores stealthy persistence mechanisms, harvested domain credentials, scheduled implants, and why proactive threat hunting is required after any compromise.",
    href: "https://medium.com/@avinashsingh10/patching-the-vulnerability-doesnt-mean-the-attack-is-over-2ab72c4167e8",
    readTime: "4 min read",
    tags: ["Incident Response", "Threat Hunting", "Persistence", "VAPT"],
  },
  {
    number: "02",
    category: "Network & Edge Security",
    title: "Your Router Might Be Working for the Attacker",
    subtitle: "Firmware Hijacking & Silent Edge Exploitation",
    description:
      "Uncovering how threat actors exploit edge networking devices, unpatched firmware, and weak management protocols to hijack DNS, bypass perimeter defenses, and turn gateway routers into silent residential proxy nodes for cyber operations.",
    href: "https://medium.com/@avinashsingh10/your-router-might-be-working-for-the-attacker-6e8deb5a87ce",
    readTime: "5 min read",
    tags: ["Network Security", "Firmware Analysis", "IoT Defense", "DNS Security"],
  },
  {
    number: "03",
    category: "Offensive Tradecraft & Evasion",
    title: "What Happens When Ransomware Boots Around EDR?",
    subtitle: "BYOVD Attacks & Kernel-Level Defense Evasion",
    description:
      "Examining advanced adversary evasion tradecraft including Bring Your Own Vulnerable Driver (BYOVD) exploits, boot-level persistence, and kernel callback blinding techniques designed to circumvent Endpoint Detection & Response (EDR) agents.",
    href: "https://medium.com/@avinashsingh10/what-happens-when-ransomware-boots-around-edr-c76b1f240cf5",
    readTime: "6 min read",
    tags: ["EDR Evasion", "Ransomware", "BYOVD", "Kernel Security"],
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 inline-flex items-center justify-center gap-3">
              Articles & Writeups
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Technical cybersecurity research, threat analysis, and offensive & defensive concepts published on Medium.
            </p>
          </div>
        </Reveal>

        {/* Articles Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <FadeInItem key={article.title}>
              <article className="neobrutalist-card h-full p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:translate-y-[-4px] hover:shadow-brutal bg-card border-2 border-border hover:border-primary">
                <div>
                  {/* Card Header: Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-border/80">
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      {article.number} · {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground whitespace-nowrap">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-5">
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group-hover:text-primary transition-colors block"
                    >
                      <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </a>
                    <p className="text-xs font-semibold text-secondary mt-1.5 uppercase tracking-wide">
                      {article.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/75 leading-relaxed text-sm mt-4">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 bg-primary/10 border border-primary/20 text-foreground/80"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-border">
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 neobrutalist-button neobrutalist-button-primary px-4 py-3 text-sm group/btn"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <MediumIcon size={16} className="relative z-10 shrink-0" />
                    <span className="relative z-10 font-bold">Read on Medium</span>
                    <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0" />
                  </a>
                </div>
              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Bottom Banner to Follow on Medium */}
        <Reveal delay={0.2}>
          <div className="mt-14 neobrutalist-card p-6 sm:p-8 bg-card flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="p-3.5 bg-primary/10 border-2 border-primary/30 text-primary shrink-0 hidden xs:block">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground">
                  Follow on Medium <span className="text-primary font-mono font-normal">@avinashsingh10</span>
                </h4>
                <p className="text-sm text-foreground/70 mt-1">
                  Read upcoming security writeups, tool analysis, and practical penetration testing findings.
                </p>
              </div>
            </div>

            <a
              href="https://medium.com/@avinashsingh10"
              target="_blank"
              rel="noopener noreferrer"
              className="neobrutalist-button neobrutalist-button-secondary px-6 py-3.5 text-sm inline-flex items-center gap-2 shrink-0 group whitespace-nowrap"
            >
              <MediumIcon size={18} className="relative z-10 shrink-0" />
              <span className="relative z-10 font-bold">Visit Medium Profile</span>
              <ExternalLink className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BlogSection;
