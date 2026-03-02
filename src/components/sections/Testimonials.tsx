import { motion } from "motion/react";

const testimonials = [
  {
    quote: "The level of detail and the cinematic approach they take is unheard of in the industry. Truly ahead of its time.",
    author: "Elena Vance",
    role: "CEO, Lumina Tech",
    color: "from-brand to-blue-500"
  },
  {
    quote: "They didn't just build a site, they built an experience that defines our brand's future presence.",
    author: "Julian Stark",
    role: "Design Director, Zenith",
    color: "from-gray-700 to-white"
  },
  {
    quote: "A masterclass in futuristic design. The interaction models are intuitive yet groundbreaking.",
    author: "Sarah Chen",
    role: "Product Lead, Nexus",
    color: "from-purple-600 to-pink-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-dark to-[#111]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold italic"
          >
            COLLECTIVE PRAISE
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-10 snap-x no-scrollbar">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[85%] md:min-w-[400px] snap-center glass-morphism p-8 rounded-custom relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-brand/10 blur-3xl`}></div>
              <p className="text-white italic mb-8 relative z-10 text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.color} border-2 border-white/10`}></div>
                <div>
                  <p className="text-xs font-bold uppercase">{t.author}</p>
                  <p className="text-[10px] text-brand uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
