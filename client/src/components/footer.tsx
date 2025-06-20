import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold mb-4">Indu Yelchuri</div>
            <p className="text-gray-400">
              Data Analytics & UI/UX Design specialist crafting meaningful digital experiences 
              through the power of data and design.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <button
                onClick={() => scrollToSection("about")}
                className="block hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block hover:text-white transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block hover:text-white transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4">Let's Connect</h3>
            <div className="space-y-2 text-gray-400">
              <div>induy9320@gmail.com</div>
              <div>Hyderabad, Telangana</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2025 Indu Yelchuri. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
