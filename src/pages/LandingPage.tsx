import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Niche from "../components/Niche";
import Features from "../components/Features";
import Faq from "../components/FAQ";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white">
      <Navbar />
      <Hero />
      <Niche />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
}

export default LandingPage;
