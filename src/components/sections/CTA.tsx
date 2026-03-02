import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-brand/5 blur-[120px]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-12">
          READY TO <br/><span className="text-brand">EVOLVE?</span>
        </h2>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:hello@future.com"
          className="group relative inline-flex items-center justify-center w-full max-w-xs py-6 bg-brand rounded-custom text-white font-black text-xl uppercase tracking-tighter shadow-[0_0_30px_rgba(164,19,236,0.5)] transition-all"
        >
          JOIN US
          <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
}
