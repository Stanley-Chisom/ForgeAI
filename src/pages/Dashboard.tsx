import { useState } from "react";
import {
  Mic,
  Upload,
  Edit2,
  Copy,
  Download,
  Share2,
  ChevronDown,
  Loader2,
  LogOut,
} from "lucide-react";
import { generatePrompts } from "../services/ai";

const niches = [
  "General",
  "Coding",
  "Marketing",
  "Content Creation",
  "Business",
  "Education",
];

function Dashboard() {
  const [selectedNiche, setSelectedNiche] = useState("General");
  const [inputText, setInputText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompts, setGeneratedPrompts] = useState<
    Array<{ style: string; content: string }>
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleGeneratePrompts = async () => {
    if (!inputText.trim()) {
      setError("Please enter your idea first");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const prompts = await generatePrompts({
        idea: inputText,
        niche: selectedNiche,
      });
      setGeneratedPrompts(prompts);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyPrompt = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy prompt:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-gray-100">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                PromptCraft
              </h1>
              {/* <div className="hidden md:flex space-x-6 ml-8">
                <button className="text-gray-300 hover:text-white transition-colors">
                  <History className="w-5 h-5" />
                </button>
                <button className="text-gray-300 hover:text-white transition-colors">
                  <Star className="w-5 h-5" />
                </button>
                <button className="text-gray-300 hover:text-white transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div> */}
            </div>
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="hidden md:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Your Idea</h2>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg transition-colors">
                    <Upload className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full h-40 p-4 bg-[#242424] border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-gray-100 placeholder-gray-500 resize-none"
                  placeholder="Describe your goal or paste your idea here..."
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={handleGeneratePrompts}
                    disabled={isGenerating}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-all duration-200 shadow-lg"
                  >
                    {isGenerating && (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    )}
                    <span>Generate Prompts</span>
                  </button>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-900/20 text-red-400 rounded-lg border border-red-800">
                  {error}
                </div>
              )}

              <div className="mt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <label className="text-sm font-medium text-gray-300">
                    Select Niche:
                  </label>
                  <div className="relative">
                    <select
                      value={selectedNiche}
                      onChange={(e) => setSelectedNiche(e.target.value)}
                      className="appearance-none bg-[#242424] border border-gray-700 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-gray-100"
                    >
                      {niches.map((niche) => (
                        <option key={niche} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Prompts */}
            <div className="mt-8 bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-800 p-6">
              <h2 className="text-lg font-medium mb-4">Generated Prompts</h2>
              <div className="space-y-4">
                {generatedPrompts.map((prompt, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 rounded-lg p-4 bg-[#242424] hover:border-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-cyan-400">
                        {prompt.style}
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-1 text-gray-400 hover:text-cyan-400 transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleCopyPrompt(prompt.content)}
                          className="p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-cyan-400 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-cyan-400 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300 whitespace-pre-wrap">
                      {prompt.content}
                    </p>
                  </div>
                ))}
                {!isGenerating && generatedPrompts.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                    <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 flex items-center justify-center">
                      <Edit2 className="w-8 h-8 text-gray-600" />
                    </div>
                    <p>
                      Enter your idea and click "Generate Prompts" to get
                      started
                    </p>
                  </div>
                )}
                {isGenerating && (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                    <span className="ml-2 text-cyan-400">
                      Generating prompts...
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Suggestions Panel */}
          <div className="bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Suggestions</h2>
              <button
                onClick={() => setShowSuggestions(!showSuggestions)}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    showSuggestions ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {showSuggestions && (
              <div className="space-y-4">
                <div className="p-5 bg-[#242424] rounded-lg  ">
                  <h3 className="text-sm font-medium text-cyan-400 mb-2">
                    Consider adding:
                  </h3>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>Specific goals or objectives</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 rounded-full bg-fuchsia-400" />
                      <span>Target audience details</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>Preferred tone or style</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 rounded-full bg-fuchsia-400" />
                      <span>Key constraints or requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
