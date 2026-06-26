import { Star } from "lucide-react";

const Rating = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="transition-all duration-200 hover:scale-125 active:scale-95"
        >
          <Star
            size={28}
            className={`transition-all duration-200 ${
              star <= value
                ? "fill-yellow-400 text-yellow-400"
                : "text-slate-600 hover:text-yellow-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default Rating;