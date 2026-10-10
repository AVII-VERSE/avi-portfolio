import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

let lastAlertTime = 0;

export const useSecurityShield = () => {
  useEffect(() => {
    // 1. Console security banner for anyone attempting inspection
    const bannerStyleHeader =
      "color: #ff3333; font-size: 20px; font-weight: bold; background: #111; padding: 4px 8px; border-radius: 4px;";
    const bannerStyleBody =
      "color: #00ffcc; font-size: 13px; font-family: monospace; background: #0a0a0a; padding: 6px;";

    console.clear();
    console.log("%c[SECURITY SHIELD ACTIVE - AVINASH SINGH PORTFOLIO]", bannerStyleHeader);
    console.log(
      "%c⚠️ All assets, styles, logic, and intellectual property are protected.\nUnauthorized automated scraping, vulnerability scanning, or code extraction is strictly monitored.",
      bannerStyleBody
    );

    // Helper: Trigger subtle anti-tamper toast with 3s throttle
    const notifyBlockedAction = (actionName: string) => {
      const now = Date.now();
      if (now - lastAlertTime > 3000) {
        lastAlertTime = now;
        toast({
          title: "🛡️ Security Shield Active",
          description: `${actionName} is disabled to protect intellectual property & confidentiality.`,
          variant: "destructive",
        });
      }
    };

    // 2. Prevent right-click context menu (exempt input & textarea so user experience is intact)
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      e.preventDefault();
      notifyBlockedAction("Right-click context menu");
    };

    // 3. Block devtools, inspect shortcuts, and save page shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      // Block F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
        notifyBlockedAction("Developer tools shortcut (F12)");
        return;
      }

      const isCtrlOrMeta = e.ctrlKey || e.metaKey;

      // Block Ctrl+U / Cmd+U (View Page Source)
      if (isCtrlOrMeta && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        notifyBlockedAction("View page source");
        return;
      }

      // Block Ctrl+S / Cmd+S (Save Page)
      if (isCtrlOrMeta && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        notifyBlockedAction("Page saving");
        return;
      }

      // Block Devtools Inspect shortcuts: Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (
        isCtrlOrMeta &&
        e.shiftKey &&
        (e.key === "I" ||
          e.key === "i" ||
          e.key === "J" ||
          e.key === "j" ||
          e.key === "C" ||
          e.key === "c")
      ) {
        e.preventDefault();
        notifyBlockedAction("Inspection shortcuts");
        return;
      }

      // Block Ctrl+A (Select All) outside inputs to prevent full page scraping
      if (isCtrlOrMeta && (e.key === "a" || e.key === "A") && !isInput) {
        e.preventDefault();
        notifyBlockedAction("Bulk text selection");
        return;
      }

      // Block Ctrl+C (Copy) outside inputs
      if (isCtrlOrMeta && (e.key === "c" || e.key === "C") && !isInput) {
        e.preventDefault();
        notifyBlockedAction("Content copying");
        return;
      }
    };

    // 4. Block copy event on document outside inputs
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      e.preventDefault();
      notifyBlockedAction("Copying page content");
    };

    // 5. Block dragging images/svgs
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "IMG" || target.tagName === "SVG")) {
        e.preventDefault();
      }
    };

    window.addEventListener("contextmenu", handleContextMenu, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    document.addEventListener("copy", handleCopy, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu, { capture: true } as any);
      window.removeEventListener("keydown", handleKeyDown, { capture: true } as any);
      document.removeEventListener("copy", handleCopy, { capture: true } as any);
      document.removeEventListener("dragstart", handleDragStart, { capture: true } as any);
    };
  }, []);
};
