import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          Turn Your Ideas Into Perfect Prompts for Any AI
        </h1>
        <p className="text-[1.2rem] text-gray-400 mb-12 max-w-[65ch] mx-auto">
          No matter your niche, our AI refines your vision into actionable
          prompts that get results. Perfect for developers, marketers, and
          content creators.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center px-8 py-4 text-lg font-medium bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 shadow-lg group"
        >
          Get Started for Free
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
