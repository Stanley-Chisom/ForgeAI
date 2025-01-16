import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              ForgeAi
            </span>
          </div>
          <p className="text-gray-500">© 2024 ForgeAi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
