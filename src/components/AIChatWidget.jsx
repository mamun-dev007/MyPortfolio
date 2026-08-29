import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

// লোকাল পোর্টফোলিও ডেটাবেস
const portfolioKnowledge = [
  {
    keywords: ["নাম", "name", "কে তুমি", "who are you", "পরিচয়"],
    answer:
      "আমি MamunAI, মামুনের পার্সোনাল এআই অ্যাসিস্ট্যান্ট। আমি মামুনের পোর্টফোলিও সম্পর্কে আপনাকে সাহায্য করতে পারি।",
  },
  {
    keywords: ["দক্ষতা", "স্কিল", "skills", "skill", "পারি", "know", "tech"],
    answer:
      "মামুনের মূল দক্ষতাগুলো হলো: React.js, Next.js, JavaScript, Tailwind CSS এবং Node.js। এছাড়া তিনি ফ্রন্টএন্ড ডিজাইনে বেশ দক্ষ।",
  },
  {
    keywords: ["প্রজেক্ট", "project", "projects", "কাজ", "work", "portfolio"],
    answer:
      "মামুন বেশ কিছু চমৎকার প্রজেক্ট তৈরি করেছেন। এর মধ্যে ই-কমার্স ওয়েবসাইট, পোর্টফোলিও সাইট এবং এআই চ্যাটবট অন্যতম। আপনি কি কোনো নির্দিষ্ট প্রজেক্ট সম্পর্কে জানতে চান?",
  },
  {
    keywords: ["যোগাযোগ", "contact", "email", "ইমেইল", "ফোন", "hire", "হায়ার"],
    answer:
      "আপনি মামুনের সাথে ইমেইলে যোগাযোগ করতে পারেন: example@email.com অথবা তার LinkedIn প্রোফাইলে মেসেজ দিতে পারেন।",
  },
  {
    keywords: ["অভিজ্ঞতা", "experience", "চাকরি", "job"],
    answer:
      "মামুন একজন প্যাশনেট ওয়েব ডেভেলপার হিসেবে গত ২ বছর ধরে কাজ করছেন। তিনি বিভিন্ন ক্লায়েন্টের জন্য রেস্পন্সিভ ওয়েবসাইট বানিয়েছেন।",
  },
  {
    keywords: ["hi", "hello", "হাই", "হ্যালো", "নমস্কার", "সালাম"],
    answer:
      "হ্যালো! আমি কিভাবে আপনাকে সাহায্য করতে পারি? আপনি মামুনের দক্ষতা, প্রজেক্ট বা যোগাযোগের মাধ্যম সম্পর্কে জিজ্ঞাসা করতে পারেন।",
  },
];

// ইউজারের ইনপুট থেকে উত্তর খুঁজে বের করার লোকাল ফাংশন
const generateLocalResponse = (input) => {
  const lowerInput = input.toLowerCase();

  for (const item of portfolioKnowledge) {
    // যদি ইনপুটের মধ্যে কোনো কি-ওয়ার্ড মিলে যায়
    if (
      item.keywords.some((keyword) =>
        lowerInput.includes(keyword.toLowerCase()),
      )
    ) {
      return item.answer;
    }
  }

  // যদি কোনো কি-ওয়ার্ড না মিলে
  return "দুঃখিত, আমি আপনার প্রশ্নটি ঠিক বুঝতে পারিনি। আপনি কি মামুনের 'দক্ষতা', 'প্রজেক্ট' বা 'যোগাযোগ' সম্পর্কে জানতে চাচ্ছেন?";
};

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "হাই! আমি MamunAI 👋 Mamun-এর পোর্টফোলিও সম্পর্কে কিছু জানতে চান?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = { role: "user", content: trimmed };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // লোকাল এআই রেসপন্স সিমুলেট করা হচ্ছে (একটু দেরি করে উত্তর আসবে, যাতে রিয়েল মনে হয়)
    setTimeout(() => {
      const aiReply = generateLocalResponse(trimmed);
      setMessages((prev) => [...prev, { role: "assistant", content: aiReply }]);
      setLoading(false);
    }, 1000); // ১ সেকেন্ড পর উত্তর আসবে
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ===== Floating Button ===== */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-22 right-9 z-[60] w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-shadow"
        aria-label="Open AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ===== Chat Window ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed bottom-34 right-6 z-[60] w-[90vw] max-w-sm h-[70vh] max-h-[520px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${
              isDarkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">MamunAI</p>
                <p className="text-white/70 text-xs">
                  সবসময় সাহায্যের জন্য প্রস্তুত
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-sm"
                        : isDarkMode
                          ? "bg-gray-800 text-gray-100 rounded-bl-sm"
                          : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className={`px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-sm ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-400"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <span className="inline-flex gap-1">
                      <span className="animate-bounce [animation-delay:-0.3s]">
                        ●
                      </span>
                      <span className="animate-bounce [animation-delay:-0.15s]">
                        ●
                      </span>
                      <span className="animate-bounce">●</span>
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className={`flex items-center gap-2 p-3 border-t ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="কিছু জিজ্ঞাসা করুন..."
                disabled={loading}
                className={`flex-1 px-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                  isDarkMode
                    ? "bg-gray-800 text-white placeholder-gray-500"
                    : "bg-gray-100 text-gray-800 placeholder-gray-400"
                }`}
              />
              <motion.button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
