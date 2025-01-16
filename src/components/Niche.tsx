import { Code, MessageSquare, PenTool } from "lucide-react";
import React from "react";

const Niche = () => {
  const niches = [
    { icon: <Code />, label: "Coding" },
    { icon: <MessageSquare />, label: "Marketing" },
    { icon: <PenTool />, label: "Content Creation" },
  ];

  return (
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
  );
};

export default Niche;
