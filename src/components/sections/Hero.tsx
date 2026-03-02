import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Scene3D from "../canvas/Scene3D";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yScene = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-gradient-mesh"
    >
      <motion.div style={{ y: yScene }} className="absolute inset-0 z-0">
        <Scene3D />
      </motion.div>
      
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-10 text-center max-w-2xl"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-brand tracking-[0.3em] text-[10px] font-bold uppercase mb-6 animate-pulse"
        >
          Arrival . 2024
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 italic"
        >
          THE FUTURE <br/>IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-400">UNWRITTEN</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto mb-10"
        >
          Pioneering digital dimensions through cinematic storytelling and futuristic engineering.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <a 
            href="#about"
            className="group relative px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-custom hover:bg-brand hover:text-white transition-all duration-500"
          >
            Begin Journey
            <span className="absolute -inset-1 bg-brand/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent"></div>
      </motion.div>
    </section>
  );
}
