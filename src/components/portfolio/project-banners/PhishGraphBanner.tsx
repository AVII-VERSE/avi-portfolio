import React from "react";
import { Send, Globe, AlertTriangle, Network } from "lucide-react";

export const PhishGraphBanner: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[320px] bg-gradient-to-br from-[#0e0a17] via-[#1a102f] to-[#0a0714] p-5 flex flex-col justify-between relative overflow-hidden border border-border/60 select-none font-mono">
      {/* Background Cyber Glow */}
      <div className="absolute right-0 bottom-0 w-48 h-48 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            <Send className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white tracking-widest uppercase">PhishGraph</span>
            <span className="text-[10px] text-purple-400 block leading-none font-sans">Telegram Threat Bot</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[10px]">
          <Network className="w-3 h-3" />
          <span>RDAP & DNS MAP</span>
        </div>
      </div>

      {/* Center Visual: Telegram Bot Threat Card */}
      <div className="relative z-10 py-3 my-auto flex flex-col gap-2.5">
        <div className="bg-black/50 border border-purple-500/30 rounded p-2.5 backdrop-blur-sm shadow-[0_0_16px_rgba(168,85,247,0.12)]">
          <div className="flex items-center justify-between text-[10px] text-white/90 mb-1.5 pb-1.5 border-b border-white/10">
            <span className="flex items-center gap-1.5 text-purple-300 font-semibold truncate max-w-[170px]">
              <Globe className="w-3 h-3 text-purple-400 shrink-0" />
              auth-verify-portal.top
            </span>
            <span className="text-red-400 font-bold flex items-center gap-1 bg-red-950/80 border border-red-500/40 px-1.5 py-0.5 rounded text-[9px]">
              <AlertTriangle className="w-2.5 h-2.5" />
              HIGH RISK 96%
            </span>
          </div>

          <div className="space-y-1 text-[10px] text-white/70">
            <div className="flex justify-between">
              <span>Domain Age:</span>
              <span className="text-red-300 font-semibold">2 Days Old (DGA)</span>
            </div>
            <div className="flex justify-between">
              <span>Threat Vector:</span>
              <span className="text-purple-300">Credential Harvest</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-950/40 border border-purple-500/25 rounded px-2.5 py-1.5 text-[10px] flex items-center justify-between text-purple-200">
          <span>VirusTotal Intel:</span>
          <span className="text-red-400 font-bold">14/72 Flags (Malicious)</span>
        </div>
      </div>

      {/* Bottom Footer Stats */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
        <span className="text-white/70">Multi-Layer Heuristics</span>
        <span className="text-purple-300 font-semibold">Automated Telegram Alerts</span>
      </div>
    </div>
  );
};

export default PhishGraphBanner;
