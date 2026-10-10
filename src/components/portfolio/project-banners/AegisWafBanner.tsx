import React from "react";
import { Shield, ShieldAlert, CheckCircle2, Zap } from "lucide-react";

export const AegisWafBanner: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[320px] bg-gradient-to-br from-[#0c1017] via-[#111827] to-[#0a0e17] p-5 flex flex-col justify-between relative overflow-hidden border border-border/60 select-none font-mono">
      {/* Background Cyber Grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px), linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(239,68,68,0.3)]">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white tracking-widest uppercase">AegisWAF</span>
            <span className="text-[10px] text-primary/80 block leading-none font-sans">AI Dual-Layer Defense</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
            SOC LIVE
          </span>
        </div>
      </div>

      {/* Center Visual: Shield Node & Dual-Layer Engine */}
      <div className="relative z-10 py-4 my-auto flex flex-col gap-2.5">
        <div className="bg-black/50 border border-white/10 rounded p-2.5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-white/80 font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-secondary" />
              Layer 1: Heuristic Engine
            </span>
            <span className="text-emerald-400 text-[10px]">PASS: 200 OK</span>
          </div>
          <p className="text-[10px] text-white/50 truncate">GET /api/v1/auth/session [CLEAN]</p>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded p-2.5 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.15)]">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-primary font-bold flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-primary" />
              Layer 2: ML Anomaly Detector
            </span>
            <span className="text-primary text-[10px] font-bold px-1.5 py-0.2 bg-primary/20 border border-primary/40 rounded">
              BLOCKED
            </span>
          </div>
          <p className="text-[10px] text-primary/90 truncate font-mono">
            DROP: SQLi payload `UNION SELECT 1,2,schema()`
          </p>
        </div>
      </div>

      {/* Bottom Footer Stats */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          OWASP Top 10 Intercept
        </span>
        <span className="text-secondary font-semibold">99.8% Detection Rate</span>
      </div>
    </div>
  );
};

export default AegisWafBanner;
