import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <motion.form
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/2
        p-8
        backdrop-blur-xl
        opacity-70
        pointer-events-none
    "
        >
            <div
                className="
        absolute
        inset-0
        rounded-3xl
        bg-black/20
        backdrop-blur-[1px]
    "
            />
            <h3 className="text-2xl font-bold text-white">
                Send a Message
            </h3>
            <div
                className="
        mt-3
        inline-flex
        items-center
        rounded-full
        border
        border-yellow-500/20
        bg-yellow-500/10
        px-3
        py-1
        text-xs
        font-medium
        text-yellow-300
    "
            >
            🚀 Contact form is currently under development. You can still connect with me anytime using the email and contact details available in the Contact Information section on the left.
            </div>

            <div className="mt-8 space-y-5">

                <div>
                    <label className="mb-2 block text-slate-400">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="John Doe"
                        className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-black/20
              px-4
              py-4
              text-white
              outline-none
              focus:border-violet-500
            "
                    />
                </div>

                <div>
                    <label className="mb-2 block text-slate-400">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="john@example.com"
                        disabled
                        className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-black/20
    px-4
    py-4
    text-white
    opacity-60
    cursor-not-allowed
"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-slate-400">
                        Message
                    </label>

                    <textarea
                        rows="6"
                        placeholder="Tell me about your project..."
                        disabled
                        className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-black/20
    px-4
    py-4
    text-white
    opacity-60
    cursor-not-allowed
"
                    />
                </div>

                <button
                    disabled
                    className="
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-white/10
        px-6
        py-4
        font-semibold
        text-slate-400
        cursor-not-allowed
    "
                >
                    <Send size={18} />
                    Coming Soon
                </button>
            </div>
        </motion.form>
        
    );
}