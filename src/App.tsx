/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import CTA from "./components/sections/CTA";
import CustomCursor from "./components/ui/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
