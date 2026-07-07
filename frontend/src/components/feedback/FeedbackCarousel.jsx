import FeedbackCard from "./FeedbackCard";

const FeedbackCarousel = ({ feedbacks = [] }) => {
  if (!feedbacks.length) {
    return (
      <div className="text-center py-20 text-slate-400">
        No feedback yet.
      </div>
    );
  }

  const items = [...feedbacks, ...feedbacks];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <style>{`
        @keyframes customMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          animation: customMarquee 25s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ticker Window Frame */}
      <div className="flex w-max max-w-full">
        <div className="flex items-start gap-4 marquee-container md:gap-6">
          {items.map((feedback, index) => (
            <div
              key={`${feedback._id || index}-${index}`}
              className="w-[min(85vw,22rem)] shrink-0 px-2 sm:w-[24rem] lg:w-[26rem]"
            >
              <FeedbackCard feedback={feedback} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;