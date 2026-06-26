import { motion } from "framer-motion";
import { Star, Calendar, User, MessageCircle } from "lucide-react";

const FeedbackList = ({ feedbacks, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="relative">
          <div className="w-12 h-12 border-3 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
        </div>
        <p className="text-slate-400 text-sm mt-4">Loading feedback...</p>
      </div>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <MessageCircle size={48} className="text-slate-600 mb-4" />
        <h4 className="text-white font-medium mb-1">No feedback yet</h4>
        <p className="text-slate-400 text-sm">Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {feedbacks.map((feedback, index) => (
        <motion.div
          key={feedback._id || index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="
            group
            bg-white/5 
            hover:bg-white/10 
            border border-white/5 
            hover:border-violet-500/20
            rounded-xl 
            p-4 
            transition-all 
            duration-300
          "
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {/* Avatar */}
              <div className="
                flex-shrink-0 
                w-10 h-10 
                rounded-full 
                bg-gradient-to-br 
                from-violet-500/30 to-cyan-500/30 
                flex items-center justify-center
                border border-white/10
              ">
                <User size={16} className="text-violet-300" />
              </div>
              
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-medium text-white truncate">
                  {feedback.name || "Anonymous"}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`
                          ${i < (feedback.rating || 0) 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-slate-600"
                          }
                        `}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">
                    {feedback.rating || 0}/5
                  </span>
                </div>
              </div>
            </div>
            
            <span className="text-[10px] text-slate-500 whitespace-nowrap flex items-center gap-1">
              <Calendar size={10} />
              {feedback.createdAt 
                ? new Date(feedback.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })
                : 'Recently'
              }
            </span>
          </div>

          {/* Content */}
          <p className="text-sm text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
            {feedback.message || feedback.feedback || "No message provided"}
          </p>

          {/* Footer */}
          {feedback.role && (
            <div className="mt-2 flex items-center gap-2">
              <span className="
                text-[10px] 
                px-2 py-0.5 
                rounded-full 
                bg-violet-500/10 
                text-violet-300
                border border-violet-500/10
                font-mono
              ">
                {feedback.role}
              </span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FeedbackList;