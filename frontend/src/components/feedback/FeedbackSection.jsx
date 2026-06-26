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
import FeedbackList from "./FeedbackList";

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

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-[#050812] via-[#0a0f1f] to-[#050812] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 mb-4">
            <MessageCircle size={14} className="text-violet-400" />
            <span className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase">
              Guestbook
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What People{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real feedback from real people who've worked with me
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-violet-500/30 transition-all duration-300 group">
            <Users className="w-6 h-6 text-violet-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-white">{stats.total}</div>
            <div className="text-xs text-slate-400">Total Feedback</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-cyan-500/30 transition-all duration-300 group">
            <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-white">{stats.averageRating || 0}</div>
            <div className="text-xs text-slate-400">Average Rating</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-emerald-500/30 transition-all duration-300 group">
            <ThumbsUp className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-white">{stats.recent}</div>
            <div className="text-xs text-slate-400">Recent (7 days)</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-fuchsia-500/30 transition-all duration-300 group">
            <Sparkles className="w-6 h-6 text-fuchsia-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-white">{feedbacks.length > 0 ? feedbacks.length : "—"}</div>
            <div className="text-xs text-slate-400">Total Reactions</div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <FeedbackForm onSuccess={() => fetchFeedbacks(true)} />
            </div>
          </motion.div>

          {/* Feedback List with Scroll */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6">
              {/* List Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Quote size={16} className="text-violet-400" />
                  <span className="text-sm font-medium text-white">
                    All Feedback ({feedbacks.length})
                  </span>
                </div>
                
                <button
                  onClick={() => fetchFeedbacks(true)}
                  disabled={refreshing}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors duration-200 disabled:opacity-50"
                >
                  <RefreshCw size={12} className={`${refreshing ? "animate-spin" : ""}`} />
                  <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
                </button>
              </div>

              {/* Scrollable Container with Fixed Height */}
              <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0B1120]/80 to-transparent z-10 pointer-events-none opacity-0 transition-opacity duration-300" id="scroll-top-gradient" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0B1120]/80 to-transparent z-10 pointer-events-none opacity-0 transition-opacity duration-300" id="scroll-bottom-gradient" />
                
                {/* Scrollable List */}
                <div 
                  className="
                    max-h-[500px] min-h-[300px] 
                    overflow-y-auto 
                    pr-2
                    custom-scrollbar
                    space-y-3
                  "
                  id="feedback-scroll-container"
                  onScroll={(e) => {
                    const el = e.target;
                    const topGradient = document.getElementById('scroll-top-gradient');
                    const bottomGradient = document.getElementById('scroll-bottom-gradient');
                    
                    if (topGradient) {
                      topGradient.style.opacity = el.scrollTop > 10 ? '1' : '0';
                    }
                    if (bottomGradient) {
                      bottomGradient.style.opacity = 
                        el.scrollHeight - el.scrollTop - el.clientHeight > 10 ? '1' : '0';
                    }
                  }}
                >
                  <FeedbackList 
                    feedbacks={feedbacks} 
                    loading={loading} 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.3);
          border-radius: 10px;
          transition: background 0.3s;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.5);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(168, 85, 247, 0.3) rgba(255, 255, 255, 0.03);
        }
      `}</style>
    </section>
  );
};

export default FeedbackSection;