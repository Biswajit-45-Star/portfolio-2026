import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import Rating from "./Rating";
import { createFeedback } from "../../api/feedbackApi";

const MAX_MESSAGE = 500;

const FeedbackForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name.trim().length < 2) {
      return toast.error("Name should be at least 2 characters.");
    }

    if (form.message.trim().length < 10) {
      return toast.error("Message should be at least 10 characters.");
    }

    try {
      setLoading(true);

      await createFeedback(form);

      toast.success("Thank you for signing my guestbook! ❤️");

      setForm({
        name: "",
        email: "",
        message: "",
        rating: 5,
      });

      onSuccess?.();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
    >
      <h3 className="text-2xl font-bold mb-2">Sign the Guestbook</h3>

      <p className="text-slate-400 text-sm mb-8">
        I'd love to hear your thoughts about my portfolio.
      </p>

      <div className="space-y-5">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 outline-none focus:border-cyan-400 transition"
        />

        <input
          name="email"
          type="email"
          placeholder="Email (Optional)"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 outline-none focus:border-cyan-400 transition"
        />

        <div>
          <p className="text-sm text-slate-400 mb-3">
            Rating
          </p>

          <Rating
            value={form.rating}
            onChange={(rating) =>
              setForm((prev) => ({
                ...prev,
                rating,
              }))
            }
          />
        </div>

        <div>
          <textarea
            rows={6}
            maxLength={MAX_MESSAGE}
            name="message"
            placeholder="Share your thoughts..."
            value={form.message}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 outline-none focus:border-cyan-400 transition"
          />

          <div className="mt-2 text-right text-xs text-slate-500">
            {form.message.length}/{MAX_MESSAGE}
          </div>
        </div>

        <button
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:opacity-60"
        >
          <Send size={18} />

          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </div>
    </motion.form>
  );
};

export default FeedbackForm;