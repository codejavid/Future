export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
      <div className="mb-8 flex justify-center gap-8">
        {["Twitter", "Behance", "Instagram"].map((social) => (
          <a 
            key={social}
            href="#" 
            className="text-xs uppercase tracking-widest text-gray-500 hover:text-brand transition-colors"
          >
            {social}
          </a>
        ))}
      </div>
      <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
        © {new Date().getFullYear()} THE FUTURE IS UNWRITTEN. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
