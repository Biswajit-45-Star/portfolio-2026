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
    <div className="relative overflow-hidden py-4 w-full">
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
      <div className="flex w-max">
        {/* FIX: Using items-start here ensures expanding one element doesn't stretch row siblings */}
        <div className="flex gap-4 md:gap-6 marquee-container items-start">
          {items.map((feedback, index) => (
            <div
              key={`${feedback._id || index}-${index}`}
              className="
                shrink-0
                w-65
                sm:w-75
                md:w-82.5
                lg:w-90
                px-2
              "
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