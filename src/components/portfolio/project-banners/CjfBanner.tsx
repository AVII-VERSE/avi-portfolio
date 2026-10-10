import React from "react";
import { Crosshair, AlertTriangle, Layers, FileCode, CheckCircle2 } from "lucide-react";

export const CjfBanner: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[320px] bg-gradient-to-br from-[#0e1017] via-[#151c28] to-[#0a0d14] p-5 flex flex-col justify-between relative overflow-hidden border border-border/60 select-none font-mono">
      {/* Background UI Grid / Frame Lines */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.3)]">
            <Crosshair className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <span className="text-xs font-bold text-white tracking-widest uppercase">CJF</span>
            <span className="text-[10px] text-sky-400 block leading-none font-sans">Clickjacking & Header Scanner</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-sky-950/80 border border-sky-500/30 text-sky-300 text-[10px]">
          <Layers className="w-3 h-3" />
          <span>MULTI-THREAD (10x)</span>
        </div>
      </div>

      {/* Center Visual: Vulnerability & PoC Terminal */}
      <div className="relative z-10 py-3 my-auto flex flex-col gap-2.5">
        <div className="bg-black/50 border border-white/10 rounded p-2.5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-white/80 font-semibold truncate max-w-[180px]">
              target-portal.com
            </span>
            <span className="text-red-400 text-[9px] font-bold px-1.5 py-0.5 bg-red-950/80 border border-red-500/40 rounded flex items-center gap-1">
              <AlertTriangle className="w-2.5 h-2.5" />
              VULNERABLE
            </span>
          </div>
          <div className="space-y-1 text-[10px] text-white/70">
            <p className="text-red-300 font-mono">
              [!] X-Frame-Options: <span className="font-bold underline">MISSING</span>
            </p>
            <p className="text-red-300 font-mono">
              [!] CSP frame-ancestors: <span className="font-bold underline">NONE</span>
            </p>
          </div>
        </div>

        <div className="bg-sky-950/40 border border-sky-500/30 rounded p-2.5 backdrop-blur-sm flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2 text-sky-200">
            <FileCode className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">Auto-Generated UI Redress PoC:</span>
          </div>
          <span className="text-emerald-400 font-bold flex items-center gap-1 shrink-0">
            <CheckCircle2 className="w-3 h-3" />
            poc_exploit.html
          </span>
        </div>
      </div>

      {/* Bottom Footer Stats */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
        <span className="text-white/70">Security Headers Audit</span>
        <span className="text-sky-300 font-semibold">CVSS Markdown Reports</span>
      </div>
    </div>
  );
};

export default CjfBanner;
