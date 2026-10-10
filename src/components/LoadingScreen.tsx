import { useEffect, useState } from "react";
import styled from "styled-components";
// @ts-ignore
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  onFinish?: () => void;
}

const NAME_VARIANTS = [
  "Avinash",        // English
  "अविनाश",         // Hindi
  "アヴィナシュ",   // Japanese
  "અવિનાશ",         // Gujarati
  "অবিনাশ",         // Bengali
  "Авинаш",         // Russian
  "아비나시",       // Korean
  "أفيناش",         // Arabic
  "阿维纳什",       // Chinese
  "அவினாஷ்",        // Tamil
  "అవినాష్",        // Telugu
  "Αβινάς",         // Greek
  "Avinash",        // English (Final)
] as const;

const LoadingScreen = ({ onFinish }: LoadingScreenProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < NAME_VARIANTS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 135);
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => {
        if (onFinish) {
          onFinish();
        }
      }, 450);
      return () => clearTimeout(endTimer);
    }
  }, [index, onFinish]);

  return (
    <Container
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
      aria-label="Loading Avinash Singh portfolio"
    >
      <NameStage>
        <BrandMark aria-hidden="true">
          <span />
        </BrandMark>

        <NameFrame>
          <AnimatePresence mode="wait">
            <NameItem
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(3px)" }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              {NAME_VARIANTS[index]}
            </NameItem>
          </AnimatePresence>
        </NameFrame>

        <ProgressBar aria-hidden="true">
          <ProgressFill />
        </ProgressBar>
      </NameStage>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 45%, hsl(var(--primary) / 0.15), transparent 28rem),
    hsl(var(--background));
`;

const NameStage = styled.div`
  display: flex;
  width: min(90vw, 42rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  text-align: center;
  user-select: none;
`;

const BrandMark = styled.div`
  position: relative;
  display: grid;
  width: 2.8rem;
  height: 2.8rem;
  place-items: center;
  margin-bottom: 0.4rem;
  border: 2px solid hsl(var(--primary));
  border-radius: 0.9rem;
  transform: rotate(45deg);
  box-shadow: 0 0 28px hsl(var(--primary) / 0.28);
  animation: mark-pulse 1.8s ease-in-out infinite alternate;

  @keyframes mark-pulse {
    0% { transform: rotate(45deg) scale(0.96); }
    100% { transform: rotate(45deg) scale(1.04); }
  }

  &::before,
  &::after,
  span {
    content: "";
    position: absolute;
    background: hsl(var(--secondary));
  }

  &::before {
    width: 1.1rem;
    height: 2px;
    transform: rotate(-45deg) translateY(-0.25rem);
  }

  &::after {
    width: 2px;
    height: 1.1rem;
    transform: rotate(-45deg) translateX(0.25rem);
  }

  span {
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 999px;
    transform: rotate(-45deg);
  }
`;

const NameFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(3.5rem, 10vw, 5.5rem);
  width: 100%;
  overflow: hidden;
`;

const NameItem = styled(motion.div)`
  color: hsl(var(--foreground));
  font-size: clamp(2.2rem, 8vw, 4.8rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-wrap: balance;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", "Noto Sans Bengali", "Noto Sans Arabic", "Noto Sans KR", "Noto Sans JP", "Noto Sans TC", "Noto Sans Tamil", "Noto Sans Telugu", sans-serif;
`;

const ProgressBar = styled.div`
  width: min(14rem, 60vw);
  height: 2.5px;
  margin-top: 0.6rem;
  overflow: hidden;
  background: hsl(var(--border) / 0.6);
  border-radius: 999px;
`;

const ProgressFill = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)));
  transform-origin: left;
  animation: loading-progress 2.05s cubic-bezier(0.25, 1, 0.5, 1) forwards;

  @keyframes loading-progress {
    0% { transform: scaleX(0); }
    100% { transform: scaleX(1); }
  }
`;

export default LoadingScreen;
