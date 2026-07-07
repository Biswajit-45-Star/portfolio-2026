import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monitor, Smartphone, X } from "lucide-react";

const MobileNotice = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("mobileNotice");

    if (
      window.innerWidth < 768 &&
      !alreadySeen
    ) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 3500); // after intro loader

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("mobileNotice", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-999"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 z-1000 w-[min(92vw,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0B1120] p-5 shadow-2xl sm:p-6"
          >
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close mobile notice"
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-violet-500/20 p-4">
                <Monitor className="text-violet-400" size={30} />
              </div>
            </div>

            <h3 className="text-center text-xl font-bold text-white">
              Best Viewed on Desktop
            </h3>

            <p className="mt-4 text-center text-sm leading-6 text-slate-300">
              Thanks for visiting! This portfolio delivers its full experience
              on a desktop or laptop, with richer animations and interactions.
              The mobile version is fully functional, and I'm actively refining
              it for an even smoother experience in the next update.
            </p>

            <button
              onClick={closePopup}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-(--primary) py-3 font-medium text-white"
            >
              <Smartphone size={18} />
              Continue
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNotice;