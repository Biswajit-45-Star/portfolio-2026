import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getFeedbacks } from "../../api/feedbackApi";
import {
  Star,
  MessageCircle,
  Users,
  ThumbsUp,
  Quote,
  Sparkles,
  RefreshCw
} from "lucide-react";
import FeedbackForm from "./FeedbackForm";
import FeedbackCarousel from "./FeedbackCarousel";

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    averageRating: 0,
    recent: 0
  });

  const fetchFeedbacks = async (showRefresh = false) => {
    try {
      if (showRefresh) setRefreshing(true);
      const response = await getFeedbacks();
      setFeedbacks(response.data);

      // Calculate stats
      if (response.data.length > 0) {
        const total = response.data.length;
        const avg = response.data.reduce((acc, curr) => acc + (curr.rating || 0), 0) / total;
        const recent = response.data.filter(f => {
          const days = (new Date() - new Date(f.createdAt)) / (1000 * 60 * 60 * 24);
          return days <= 7;
        }).length;

        setStats({
          total,
          averageRating: Math.round(avg * 10) / 10,
          recent
        });
      }
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
      if (showRefresh) setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchFeedbacks(true);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-linear-to-b from-[#050812] via-[#0a0f1f] to-[#050812] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-75 h-75 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 mb-4">
            <MessageCircle size={14} className="text-(--primary)" />
            <span className="text-xs font-mono text-(--primary) tracking-[0.2em] uppercase">
              Guestbook
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What People{" "}
            <span className="bg-(--primary) bg-clip-text text-transparent">
              Say
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Honest feedback from the people and teams I’ve collaborated with.
          </p>
        </motion.div>

        <div className="flex justify-center mt-8">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    onClick={() => setShowForm(!showForm)}
    className="
      px-7 py-3
      rounded-full
      bg-(--primary)
      font-semibold
      text-white
      cursor-pointer
    "
  >
    {showForm ? "Close Feedback" : "Leave Feedback"}
  </motion.button>
</div>

<AnimatePresence>
  {showForm && (
    <motion.div
      initial={{ opacity: 0, y: -20, height: 0 }}
      animate={{ opacity: 1, y: 0, height: "auto" }}
      exit={{ opacity: 0, y: -20, height: 0 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden max-w-3xl mx-auto mt-10"
    >
      <FeedbackForm
        onSuccess={() => {
          fetchFeedbacks(true);
          setShowForm(false);
        }}
      />
    </motion.div>
  )}
</AnimatePresence>

        {/* Main Grid */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="w-full">
              {/* List Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="items-center gap-2 hidden lg:block">
                  <Quote size={16} className="text-violet-400" />
                  <span className="text-sm font-medium text-white">
                    All Feedback ({feedbacks.length})
                  </span>
                </div>
              </div>

                  <FeedbackCarousel
                    feedbacks={feedbacks}
                  />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;