import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Code,
  MessageSquare,
  PenTool,
  Lightbulb,
  ChevronRight,
  MessageCircle,
  Clock,
  Star,
  Menu,
} from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Smart Suggestions",
    description: "Real-time refinements as you type your ideas",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Multi-Style Prompts",
    description: "Get creative, formal, or detailed variations",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Prompt History",
    description: "Access and reuse your previous prompts",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Favorites",
    description: "Save and organize your best prompts",
  },
];

const niches = [
  { icon: <Code />, label: "Coding" },
  { icon: <MessageSquare />, label: "Marketing" },
  { icon: <PenTool />, label: "Content Creation" },
];

function LandingPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-[#121212]/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                ForgeAI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 shadow-lg"
              >
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 shadow-lg text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Turn Your Ideas Into Perfect Prompts for Any AI
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
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

      {/* Niches Section */}
      <div id="niche" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {niches.map((niche, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 bg-[#242424] rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-colors group"
              >
                <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-full group-hover:from-cyan-500/20 group-hover:to-fuchsia-500/20 transition-colors">
                  {React.cloneElement(niche.icon, {
                    className:
                      "w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors",
                  })}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-100">
                  {niche.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Powerful Features for Perfect Prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-colors group"
              >
                <div className="p-2 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-lg w-fit group-hover:from-cyan-500/20 group-hover:to-fuchsia-500/20 transition-colors">
                  {React.cloneElement(feature.icon, {
                    className:
                      "text-cyan-400 group-hover:text-cyan-300 transition-colors",
                  })}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-[#242424] p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-medium text-gray-100">
                How does PromptCraft work?
              </h3>
              <p className="mt-2 text-gray-400">
                Simply input your idea or goal, and our AI-powered system will
                generate multiple well-structured prompts optimized for your
                specific use case.
              </p>
            </div>
            <div className="bg-[#242424] p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-medium text-gray-100">
                Can I customize the generated prompts?
              </h3>
              <p className="mt-2 text-gray-400">
                Yes! All generated prompts can be edited and refined to match
                your exact needs. You can also save your customized prompts for
                future use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#121212] py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                PromptCraft
              </span>
            </div>
            <p className="text-gray-500">
              © 2024 PromptCraft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
