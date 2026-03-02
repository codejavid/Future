import { motion } from "motion/react";

const services = [
  {
    title: "Motion Identity",
    desc: "Dynamic visual systems that react to user behavior and environmental data.",
  },
  {
    title: "Web3 Ecosystems",
    desc: "Immersive decentralized applications built for the high-end digital collector.",
  },
  {
    title: "UI/UX Craft",
    desc: "Cinematic interfaces that blur the line between utility and high-art.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand text-xs font-bold uppercase tracking-widest block mb-4"
          >
            02 / Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic"
          >
            SERVICES.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-custom group hover:border-brand/50 transition-all duration-500"
            >
              <div className="w-12 h-[1px] bg-brand mb-6 group-hover:w-full transition-all duration-700"></div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
