import { motion } from "motion/react";

const steps = [
  {
    title: "Discovery Phase",
    desc: "Deep immersion into brand core and futuristic forecasting.",
  },
  {
    title: "Visual Blueprint",
    desc: "Translating data into high-fidelity cinematic storyboards.",
  },
  {
    title: "Hyper-Build",
    desc: "Rapid development of the core interface and interactions.",
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 relative">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-16 text-right">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand text-xs font-bold uppercase tracking-widest block mb-4"
          >
            03 / Path
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic"
          >
            PROCESS.
          </motion.h2>
        </div>

        <div className="relative space-y-20 max-w-2xl ml-auto">
          <div className="absolute left-[5px] top-0 bottom-0 w-[1px] bg-white/10"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              <div className={`absolute left-0 top-2 w-3 h-3 rounded-full ${i === 0 ? 'bg-brand shadow-[0_0_10px_#a413ec]' : 'bg-white/20 border border-brand'}`}></div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-gray-500 text-sm md:text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
