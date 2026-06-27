import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

const FeedbackCard = ({ feedback }) => {
  const [showMore, setShowMore] = useState(false);

  const initials = feedback.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const messageLimit = 150;
  const isLongMessage = feedback.message?.length > messageLimit;

  const displayMessage =
    showMore || !isLongMessage
      ? feedback.message
      : feedback.message.slice(0, messageLimit) + "...";

  return (
    <motion.div
      layout // Smoothly isolates height transitions to this specific component
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      // FIX: Changed from h-full to h-auto with a min-height. This locks baseline sizing but allows clean solo expansion.
      className="rounded-2xl w-full h-auto min-h-65 border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between select-none"
    >
      <div>
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-(--primary) flex items-center justify-center font-bold text-slate-900 shrink-0">
            {initials}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold truncate text-white">{feedback.name}</h4>
            <p className="text-xs text-slate-400">
              {feedback.createdAt 
                ? formatDistanceToNow(new Date(feedback.createdAt), { addSuffix: true })
                : "Just now"}
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
        <div className="mt-5">
          <p className="text-slate-300 text-sm leading-relaxed">
            {displayMessage}
          </p>

          {isLongMessage && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Stops click event from shifting parent components
                setShowMore(!showMore);
              }}
              className="mt-2 cursor-pointer text-(--primary) text-sm font-medium hover:underline block relative z-20"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>

      {/* Admin Reply */}
      {feedback.replied && (
        <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4">
          <p className="text-sm font-semibold text-cyan-400 mb-1">
            Biswajit's Reply
          </p>
          <p className="text-sm text-slate-300 wrap-break-word">
            {feedback.adminReply}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default FeedbackCard;