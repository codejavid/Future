import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <span className="text-brand text-xs font-bold uppercase tracking-widest">01 / Concept</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-2xl">
            We build digital relics for a <span className="italic text-gray-500">hyper-evolved</span> market.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[4/5] md:aspect-[16/9] glass-morphism rounded-custom overflow-hidden group"
        >
          <img 
            src="https://picsum.photos/seed/future-arch/1920/1080?grayscale" 
            alt="Abstract Architecture" 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-2">Philosophy</p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              Everything we touch becomes an experience. Minimalism is our core, luxury is our signature. We don't follow trends; we define the next epoch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
