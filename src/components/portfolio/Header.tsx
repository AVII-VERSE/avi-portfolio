import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { NAV_ITEMS, SOCIAL_LINKS, EMAIL } from "@/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu, X, ArrowRight, Mail, FileText } from "lucide-react";
// @ts-ignore
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onSectionClick: (section: string) => void;
}

const Header = ({ onSectionClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="w-full px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="animate-fade-in">
              <Logo size="md" />
            </div>

            {/* Mobile Header Controls */}
            <div className="flex md:hidden items-center gap-2.5">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 bg-card border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95 shadow-sm"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={cn(
                    "text-foreground hover:text-primary",
                    "transition-colors duration-300 relative group font-medium text-sm"
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <ThemeToggle />
              <button
                onClick={() => onSectionClick("resume")}
                className="neobrutalist-button neobrutalist-button-primary px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
              >
                <span className="relative z-10">Resume</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="absolute top-0 right-0 h-full w-[85%] max-w-[340px] bg-card border-l-2 border-border shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            >
              {/* Drawer Top */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                    // Navigation
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 border-2 border-border hover:border-primary text-foreground hover:text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Section Links */}
                <nav className="py-6 space-y-2">
                  {NAV_ITEMS.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-none text-left font-bold text-lg text-foreground hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/30 transition-all duration-200 group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary/70">
                          0{index + 1}.
                        </span>
                        <span>{item.label}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-border space-y-5">
                {/* Resume Link */}
                <button
                  onClick={() => handleNavClick("resume")}
                  className="w-full neobrutalist-button neobrutalist-button-primary py-3 text-center text-sm font-bold flex items-center justify-center gap-2 group"
                >
                  <FileText className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">View Resume</span>
                </button>

                {/* Social Icons Row */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 border-2 border-border bg-background text-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:shadow-brutal"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="p-2.5 border-2 border-border bg-background text-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:shadow-brutal"
                    aria-label="Send email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-center">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    Avinash Singh · Surat, India
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;