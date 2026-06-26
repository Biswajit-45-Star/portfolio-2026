import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const FeedbackCard = ({ feedback }) => {
  const initials = feedback.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-slate-900">
          {initials}
        </div>

        <div className="flex-1">
          <h4 className="font-semibold">{feedback.name}</h4>

          <p className="text-xs text-slate-400">
            {formatDistanceToNow(new Date(feedback.createdAt), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mt-5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className={
              star <= feedback.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-slate-600"
            }
          />
        ))}
      </div>

      {/* Message */}
      <p className="mt-5 leading-7 text-slate-300">
        {feedback.message}
      </p>

      {/* Admin Reply */}
      {feedback.replied && (
        <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4">
          <p className="text-sm font-semibold text-cyan-400 mb-2">
            Biswajit's Reply
          </p>

          <p className="text-sm text-slate-300">
            {feedback.adminReply}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default FeedbackCard;