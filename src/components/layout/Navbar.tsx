import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent"
      >
        <div className="text-2xl font-black tracking-tighter">
          FUTURE<span className="text-brand">.</span>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
}
