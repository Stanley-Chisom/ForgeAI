import { Lightbulb, MessageCircle, Clock, Star } from "lucide-react";
import React from "react";

const Features = () => {
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

  return (
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
  );
};

export default Features;
