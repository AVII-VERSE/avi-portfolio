import Lottie from "lottie-react";
import heroAnimation from "@/assets/hero-page-animation.json";

const SecurityAnalystCharacter = () => {
  return (
    <div className="w-full max-w-[480px] aspect-square flex items-center justify-center">
      <Lottie animationData={heroAnimation} loop={true} />
    </div>
  );
};

export default SecurityAnalystCharacter;
