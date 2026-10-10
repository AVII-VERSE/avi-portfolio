/* From Uiverse.io by alexs_8179 */

interface FooterCrystalProps {
  className?: string;
}

export const FooterCrystal = ({ className = "" }: FooterCrystalProps) => {
  return (
    <>
      <style>{`
        @keyframes crystal-bounce {
          0%, 100% { translate: 0px 36px; }
          50% { translate: 0px 46px; }
        }
        @keyframes crystal-bounce2 {
          0%, 100% { translate: 0px 46px; }
          50% { translate: 0px 56px; }
        }
        @keyframes crystal-umbral {
          0% { stop-color: hsl(var(--primary) / 0.18); }
          50% { stop-color: hsl(var(--primary) / 0.8); }
          100% { stop-color: hsl(var(--secondary) / 0.18); }
        }
        @keyframes crystal-particles {
          0%, 100% { translate: 0px 16px; }
          50% { translate: 0px 6px; }
        }

        .crystal-particle-1 {
          animation: crystal-particles 4s ease-in-out infinite;
        }
        .crystal-particle-2 {
          animation: crystal-particles 4s ease-in-out infinite;
          animation-delay: 0.8s;
        }
        .crystal-particle-3 {
          animation: crystal-particles 4s ease-in-out infinite;
          animation-delay: 1.6s;
        }
        .crystal-animated-stop-1 {
          animation: crystal-umbral 4s infinite;
        }
        .crystal-animated-stop-2 {
          animation: crystal-umbral 4s infinite;
          animation-delay: 0.5s;
        }
        .crystal-bounce {
          animation: crystal-bounce 4s ease-in-out infinite;
          translate: 0px 36px;
        }
        .crystal-bounce2 {
          animation: crystal-bounce2 4s ease-in-out infinite;
          translate: 0px 46px;
          animation-delay: 0.5s;
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="200"
        width="200"
        className={className}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <g>
          {/* Animated bounce polygons */}
          <polygon
            transform="rotate(45 100 100)"
            strokeWidth="2"
            stroke="hsl(var(--primary))"
            fill="none"
            points="70,70 148,50 130,130 50,150"
            className="crystal-bounce"
          />
          <polygon
            transform="rotate(45 100 100)"
            strokeWidth="2"
            stroke="hsl(var(--primary) / 0.6)"
            fill="none"
            points="70,70 148,50 130,130 50,150"
            className="crystal-bounce2"
          />

          {/* Main crystal body */}
          <polygon
            transform="rotate(45 100 100)"
            strokeWidth="2"
            stroke="none"
            fill="hsl(var(--card))"
            points="70,70 150,50 130,130 50,150"
          />

          {/* Top face with gradient */}
          <polygon
            strokeWidth="2"
            stroke="none"
            fill="url(#crystal-gradient-1)"
            points="100,70 150,100 100,130 50,100"
          />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="crystal-gradient-1">
              <stop style={{ stopColor: 'hsl(var(--background))', stopOpacity: 1 }} offset="20%" />
              <stop style={{ stopColor: 'hsl(var(--card))', stopOpacity: 1 }} offset="60%" />
            </linearGradient>
          </defs>

          {/* Left face */}
          <polygon
            transform="translate(20, 31)"
            strokeWidth="2"
            stroke="none"
            fill="hsl(var(--primary) / 0.5)"
            points="80,50 80,75 80,99 40,75"
          />

          {/* Left face with animated gradient */}
          <polygon
            transform="translate(20, 31)"
            strokeWidth="2"
            stroke="none"
            fill="url(#crystal-gradient-2)"
            points="40,-40 80,-40 80,99 40,75"
          />
          <defs>
            <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="crystal-gradient-2">
              <stop style={{ stopColor: 'transparent', stopOpacity: 1 }} offset="20%" />
              <stop
                style={{ stopColor: 'hsl(var(--primary) / 0.3)', stopOpacity: 1 }}
                offset="100%"
                className="crystal-animated-stop-1"
              />
            </linearGradient>
          </defs>

          {/* Right face */}
          <polygon
            transform="rotate(180 100 100) translate(20, 20)"
            strokeWidth="2"
            stroke="none"
            fill="hsl(var(--primary))"
            points="80,50 80,75 80,99 40,75"
          />

          {/* Right face with animated gradient */}
          <polygon
            transform="rotate(0 100 100) translate(60, 20)"
            strokeWidth="2"
            stroke="none"
            fill="url(#crystal-gradient-3)"
            points="40,-40 80,-40 80,85 40,110.2"
          />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="crystal-gradient-3">
              <stop style={{ stopColor: 'transparent', stopOpacity: 1 }} offset="20%" />
              <stop
                style={{ stopColor: 'hsl(var(--secondary) / 0.3)', stopOpacity: 1 }}
                offset="100%"
                className="crystal-animated-stop-2"
              />
            </linearGradient>
          </defs>

          {/* Floating particles */}
          <polygon
            transform="rotate(45 100 100) translate(80, 95)"
            strokeWidth="2"
            stroke="none"
            fill="hsl(var(--foreground))"
            points="5,0 5,5 0,5 0,0"
            className="crystal-particle-1"
          />
          <polygon
            transform="rotate(45 100 100) translate(80, 55)"
            strokeWidth="2"
            stroke="none"
            fill="hsl(var(--primary))"
            points="6,0 6,6 0,6 0,0"
            className="crystal-particle-2"
          />
          <polygon
            transform="rotate(45 100 100) translate(70, 80)"
            strokeWidth="2"
            stroke="none"
            fill="hsl(var(--primary))"
            points="2,0 2,2 0,2 0,0"
            className="crystal-particle-3"
          />

          {/* Shadow polygons */}
          <polygon
            strokeWidth="2"
            stroke="none"
            fill="hsl(var(--background))"
            points="29.5,99.8 100,142 100,172 29.5,130"
          />
          <polygon
            transform="translate(50, 92)"
            strokeWidth="2"
            stroke="none"
            fill="hsl(var(--background))"
            points="50,50 120.5,8 120.5,35 50,80"
          />
        </g>
      </svg>
    </>
  );
};