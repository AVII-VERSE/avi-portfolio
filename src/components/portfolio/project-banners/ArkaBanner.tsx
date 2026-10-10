import React from "react";
import { Activity, Radio, Cpu, Workflow } from "lucide-react";

export const ArkaBanner: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[320px] bg-gradient-to-br from-[#0a1118] via-[#0f172a] to-[#070d14] p-5 flex flex-col justify-between relative overflow-hidden border border-border/60 select-none font-mono">
      {/* Background Radar Waves */}
      <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full border border-secondary/20 pointer-events-none animate-pulse" />
      <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-secondary/15 pointer-events-none" />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary shadow-[0_0_12px_rgba(245,158,11,0.3)]">
            <Radio className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
          </div>
          <div>
            <span className="text-xs font-bold text-white tracking-widest uppercase">ARKA</span>
            <span className="text-[10px] text-secondary/90 block leading-none font-sans">Kinetic Analytics Engine</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-secondary/10 border border-secondary/30 text-secondary text-[10px]">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>STREAM RUNNING</span>
        </div>
      </div>

      {/* Center Visual: Pipeline & Threat Correlation Wave */}
      <div className="relative z-10 py-3 my-auto flex flex-col gap-2.5">
        <div className="bg-black/40 border border-white/10 rounded p-2.5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-[11px] text-white/80 mb-2">
            <span className="flex items-center gap-1.5 font-semibold text-secondary">
              <Workflow className="w-3.5 h-3.5" />
              Real-time Ingestion Stream
            </span>
            <span className="text-white/60 font-mono text-[10px]">14.2k eps</span>
          </div>
          {/* Signal wave simulation */}
          <div className="flex items-end gap-1 h-6 w-full px-1">
            {[40, 65, 30, 85, 95, 45, 70, 60, 90, 100, 55, 75, 40, 80, 60, 90, 45, 80, 95, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-secondary/40 to-secondary rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="bg-secondary/10 border border-secondary/30 rounded p-2.5 backdrop-blur-sm flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-secondary" />
            <span className="text-white/90">Correlation Rule Engine:</span>
          </div>
          <span className="text-secondary font-bold">MATCHED · 0.4ms Latency</span>
        </div>
      </div>

      {/* Bottom Footer Stats */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
        <span className="text-white/70">Autonomous Threat Correlation</span>
        <span className="text-secondary font-semibold">CI/CD Pipeline Ready</span>
      </div>
    </div>
  );
};

export default ArkaBanner;
