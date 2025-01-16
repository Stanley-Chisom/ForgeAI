import { useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  )
}

export default Navbar