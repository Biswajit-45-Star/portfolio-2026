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

  const fetchFeedbacks = async (
    showRefresh = false,
    retry = 3
  ) => {
    try {
      if (showRefresh) setRefreshing(true);

      const response = await getFeedbacks();

      const data = response?.data || [];

      setFeedbacks(data);

      if (data.length > 0) {
        const total = data.length;

        const averageRating =
          data.reduce(
            (sum, item) => sum + (item.rating || 0),
            0
          ) / total;

        const recent = data.filter((item) => {
          const days =
            (Date.now() - new Date(item.createdAt).getTime()) /
            (1000 * 60 * 60 * 24);

          return days <= 7;
        }).length;

        setStats({
          total,
          averageRating: Number(
            averageRating.toFixed(1)
          ),
          recent,
        });
      } else {
        setStats({
          total: 0,
          averageRating: 0,
          recent: 0,
        });
      }
    } catch (err) {
      console.log(err);

      if (retry > 0) {
        setTimeout(() => {
          fetchFeedbacks(showRefresh, retry - 1);
        }, 3000);

        return;
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      await fetchFeedbacks();
    };

    load();
  }, []);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (loading) return;

    const interval = setInterval(() => {
      fetchFeedbacks(true);
    }, 30000);

    return () => clearInterval(interval);
  }, [loading]);

  const [showForm, setShowForm] = useState(false);

  return (
    <section id="feedback" className="relative py-20 md:py-28 px-4 md:px-6 bg-linear-to-b from-[#050812] via-[#0a0f1f] to-[#050812] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-600/5 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute left-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl sm:h-48 sm:w-48" />
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
                    All Feedback ({feedbacks?.length})
                  </span>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center py-20">
                  <RefreshCw
                    className="animate-spin text-(--primary)"
                    size={28}
                  />
                </div>
              ) : (
                <FeedbackCarousel
                  feedbacks={feedbacks}
                />
              )}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;