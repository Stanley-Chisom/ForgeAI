const Faq = () => {
    
  return (
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
              Yes! All generated prompts can be edited and refined to match your
              exact needs. You can also save your customized prompts for future
              use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
