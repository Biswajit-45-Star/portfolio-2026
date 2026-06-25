import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroLoader({ show }) {
  const [typedCode, setTypedCode] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Full code snippet to type out
  const codeSnippet = `const dev = {
  name: "Biswajit Sahu",
  stack: ["React", "Next.js", "TypeScript", "Node.js"],
  attitude: "Sigma",
  status: "Coding at light speed ⚡"
};

dev.buildTheFuture();`;

  // Typing effect
  useEffect(() => {
    if (!show) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25); // Fast typing speed

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="
            fixed inset-0 z-99999 
            flex items-center justify-center
            bg-[#0a0a0f] overflow-hidden
          "
        >
          {/* ===== DARK MATRIX BG ===== */}
          <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0f] via-[#0d0d1a] to-[#06060e]" />

          {/* ===== GRID LINES (hacker aesthetic) ===== */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 170, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 170, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />

          {/* ===== AMBIENT GLOW ORBS ===== */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />

          {/* ===== MAIN CONTENT ===== */}
          <div className="relative z-10 max-w-3xl w-full px-6">
            
            {/* ----- TERMINAL HEADER ----- */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                flex items-center gap-3 mb-2
                text-xs text-slate-500 font-mono
                border-b border-slate-800/50 pb-3
              "
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-slate-600">bash</span>
              <span className="text-slate-700">—</span>
              <span className="text-emerald-400/60">~/dev/portfolio</span>
              <span className="ml-auto text-slate-700">v1.0.0</span>
            </motion.div>

            {/* ----- TERMINAL BODY with CODE TYPING ----- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="
                bg-[#0d0d1a]/80 backdrop-blur-sm
                border border-slate-800/60
                rounded-xl p-6 md:p-8
                shadow-2xl shadow-violet-500/5
                font-mono text-sm md:text-base
                relative overflow-hidden
              "
            >
              {/* Scanner line effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: [
                    "linear-gradient(180deg, transparent 0%, rgba(168,85,247,0.02) 50%, transparent 100%)",
                    "linear-gradient(180deg, transparent 100%, rgba(168,85,247,0.02) 50%, transparent 0%)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Code display with syntax highlighting */}
              <div className="relative">
                <pre className="text-slate-300 leading-[1.8] whitespace-pre-wrap wrap-break-word">
                  {typedCode.split('\n').map((line, i) => {
                    // Simple syntax highlighting (inline)
                    let coloredLine = line;
                    
                    // Keywords
                    coloredLine = coloredLine.replace(/\b(const|let|var|function|return|new|class|extends|import|export|default|if|else|for|while|switch|case|break|continue|try|catch|throw|async|await)\b/g, 
                      '<span class="text-purple-400">$1</span>');
                    
                    // Strings
                    coloredLine = coloredLine.replace(/"([^"]*)"/g, 
                      '<span class="text-emerald-400">"$1"</span>');
                    coloredLine = coloredLine.replace(/'([^']*)'/g, 
                      '<span class="text-emerald-400">\'$1\'</span>');
                    
                    // Numbers
                    coloredLine = coloredLine.replace(/\b(\d+)\b/g, 
                      '<span class="text-orange-400">$1</span>');
                    
                    // Comments
                    coloredLine = coloredLine.replace(/\/\/(.*)/g, 
                      '<span class="text-slate-500">//$1</span>');
                    
                    // Object properties (simple)
                    coloredLine = coloredLine.replace(/\b(name|stack|attitude|status|React|Next\.js|TypeScript|Node\.js|Sigma|Coding at light speed ⚡)\b/g,
                      '<span class="text-cyan-300">$1</span>');
                    
                    // Braces and brackets
                    coloredLine = coloredLine.replace(/([{}\[\]()])/g,
                      '<span class="text-yellow-300">$1</span>');
                    
                    // Colon and semicolon
                    coloredLine = coloredLine.replace(/([:;])/g,
                      '<span class="text-slate-400">$1</span>');
                    
                    return (
                      <div key={i} dangerouslySetInnerHTML={{ __html: coloredLine }} />
                    );
                  })}
                  {showCursor && (
                    <span className="inline-block w-0.5 h-5 bg-emerald-400 animate-pulse ml-0.5" />
                  )}
                </pre>
              </div>

              {/* ----- TERMINAL STATUS BAR ----- */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="
                  mt-4 pt-3 border-t border-slate-800/50
                  flex flex-wrap items-center justify-between gap-2
                  text-[10px] md:text-xs text-slate-500 font-mono
                "
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>READY</span>
                  </span>
                  <span className="text-slate-700">|</span>
                  <span>vscode</span>
                  <span className="text-slate-700">|</span>
                  <span className="text-cyan-400/60">TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-600">Ln 7</span>
                  <span className="text-slate-600">Col 20</span>
                  <span className="text-slate-700">|</span>
                  <span className="text-emerald-400/60">UTF-8</span>
                </div>
              </motion.div>
            </motion.div>

            {/* ----- NAME + SIGMA TAGLINE ----- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="mt-6 text-center"
            >
              <h2 className="
                text-2xl md:text-4xl font-black
                text-transparent bg-clip-text
                bg-(--primary)
                tracking-tight
              ">
                BISWAJIT SAHU
              </h2>
              <p className="
                mt-1 text-xs md:text-sm
                text-slate-500 tracking-[0.3em] uppercase
                flex items-center justify-center gap-3
              ">
                <span className="w-8 h-px bg-linear-to-r from-transparent to-violet-500/50" />
                <span className="text-slate-400/60">✦ Developing Expert ✦</span>
                <span className="w-8 h-px bg-linear-to-l from-transparent to-cyan-500/50" />
              </p>
              
              {/* Loading progress bar */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
                className="max-w-xs mx-auto mt-4 h-0.5 bg-slate-800/50 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-(--primary)"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ delay: 0.5, duration: 2.5, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ===== DECORATIVE CORNER BRACKETS ===== */}
          <div className="absolute top-8 left-8 text-violet-500/20 font-mono text-4xl">{'<'}</div>
          <div className="absolute top-8 right-8 text-cyan-500/20 font-mono text-4xl">{'/>'}</div>
          <div className="absolute bottom-8 left-8 text-cyan-500/20 font-mono text-4xl">{'/*'}</div>
          <div className="absolute bottom-8 right-8 text-violet-500/20 font-mono text-4xl">{'*/'}</div>

          {/* ===== FLOATING CODE SNIPPETS (background) ===== */}
          {['<React />', '{}', '=>', '()', 'await', 'async', '⚡', '🔥'].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-slate-700/10 font-mono text-3xl pointer-events-none"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 10 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}