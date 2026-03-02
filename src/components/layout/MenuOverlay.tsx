import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "HOME", href: "#" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PROCESS", href: "#process" },
  { name: "CONTACT", href: "mailto:hello@future.com" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-2xl flex items-center justify-center p-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 glass-morphism rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col items-center gap-8">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5, ease: "easeOut" }}
                className="group relative text-4xl md:text-7xl font-black tracking-tighter italic hover:text-brand transition-colors"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-2 bg-brand/30 -z-10"
                />
              </motion.a>
            ))}
          </nav>

          {/* Background Text Accent */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
            <span className="text-[30vw] font-black italic tracking-tighter">FUTURE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
