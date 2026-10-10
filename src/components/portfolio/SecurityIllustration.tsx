import Lottie from "lottie-react";
import coderAnimation from "@/assets/coder.json";

interface SecurityIllustrationProps {
  variant?: "about" | "contact" | "hero";
}

const SecurityIllustration = ({ variant = "contact" }: SecurityIllustrationProps) => {
  return (
    <div className="w-full max-w-[320px] mx-auto flex items-center justify-center">
      <Lottie animationData={coderAnimation} loop={true} />
    </div>
  );
};

export default SecurityIllustration;
