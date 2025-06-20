import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import induPhoto from "@assets/WhatsApp Image 2025-06-12 at 19.19.53_9adff2bd_1750171350442.jpg";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10 relative"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl-lg lg:text-8xl-lg font-black leading-none tracking-tight"
              >
                data<br />
                <span className="accent-orange">analytics</span><br />
                & design
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-md"
              >
                Welcome to a world where data meets creativity, and insights drive innovation.
              </motion.p>
            </div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex space-x-8 text-center"
            >
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-3xl font-bold accent-orange"
                >
                  8.99
                </motion.div>
                <div className="text-sm text-gray-500">CGPA</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-3xl font-bold accent-orange"
                >
                  6+
                </motion.div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-3xl font-bold accent-orange"
                >
                  3+
                </motion.div>
                <div className="text-sm text-gray-500">Internships</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex space-x-4"
            >
              <Button
                onClick={scrollToPortfolio}
                className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Eye className="mr-2 h-4 w-4" />
                View Work
              </Button>
              <Button
                onClick={() => window.open('https://drive.google.com/file/d/1aQ2sk6LWdYDWm9-UmU52pjDykDFWEb8A/view?usp=drive_link', '_blank')}
                variant="outline"
                className="border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo with Geometric Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Background geometric shapes */}
            <div className="absolute inset-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 right-1/4 w-32 h-32 bg-[var(--accent-orange)] rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-black opacity-10 transform rotate-45"
              />
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 right-0 w-16 h-16 bg-[var(--accent-orange)] opacity-30 transform rotate-12"
              />
            </div>
            
            {/* Professional photo with artistic treatment */}
            <div className="relative z-10 max-w-lg mx-auto">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-[var(--accent-orange)] to-black opacity-20 blur-xl" />
                <img
                  src={induPhoto}
                  alt="Indu Yelchuri"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl relative z-10"
                />
                
                {/* Overlay elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-8 -right-8 bg-[var(--accent-orange)] text-white p-6 rounded-lg"
                >
                  <div className="text-lg font-bold">VIT-AP University</div>
                  <div className="text-sm">M.Tech Computer Science</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-10 text-9xl font-black text-gray-100 -rotate-12 select-none pointer-events-none"
      >
        DATA
      </motion.div>
      <motion.div
        animate={{ rotate: [0, -5, 0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 right-10 text-6xl font-black text-gray-100 rotate-12 select-none pointer-events-none"
      >
        DESIGN
      </motion.div>
    </section>
  );
}
