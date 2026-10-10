import { cn } from "@/lib/utils";
import { SECTIONS } from "@/constants";

interface NavigationProps {
  currentSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionClick }: NavigationProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4">
        {SECTIONS.map((sectionId) => (
          <button
            key={sectionId}
            onClick={() => onSectionClick(sectionId)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSection === sectionId ? "bg-primary scale-125" : "bg-border hover:bg-primary"
            )}
            aria-label={`Go to ${sectionId} section`}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;