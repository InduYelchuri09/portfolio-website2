import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              about<br />
              <span className="accent-orange">me</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Hello! I'm Indu Yelchuri, a passionate <strong>Data Analyst</strong> and <strong>UI/UX Designer</strong> 
                pursuing my Integrated M.Tech in Computer Science at VIT-AP University with a CGPA of 8.99.
              </p>
              <p>
                I specialize in transforming complex data into meaningful insights and creating user-centered 
                digital experiences. My work spans from optimizing data pipelines and building interactive 
                dashboards to designing responsive interfaces that enhance user engagement.
              </p>
              <p>
                Beyond technical skills, I'm a natural leader - currently serving as President of the 
                Toastmasters Club and having led core teams for major events like TEDxVITAP.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-8 mt-12"
            >
              <div>
                <h3 className="font-bold accent-orange mb-2">Data Analytics</h3>
                <p className="text-sm text-gray-600">Power BI, SQL, Python, Tableau, Data Visualization</p>
              </div>
              <div>
                <h3 className="font-bold accent-orange mb-2">Design & Development</h3>
                <p className="text-sm text-gray-600">UI/UX, Angular, JavaScript, Responsive Design</p>
              </div>
              <div>
                <h3 className="font-bold accent-orange mb-2">Leadership</h3>
                <p className="text-sm text-gray-600">Team Management, Public Speaking, Event Planning</p>
              </div>
              <div>
                <h3 className="font-bold accent-orange mb-2">Tools & Tech</h3>
                <p className="text-sm text-gray-600">Java, R, Git, Spring Boot, Agile</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Modern geometric data visualization mockup */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3 className="font-bold mb-6">Why Choose Data + Design?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">User Experience</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "95%" } : {}}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="bg-[var(--accent-orange)] h-2 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium">95%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Insights</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "92%" } : {}}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="bg-[var(--accent-orange)] h-2 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium">92%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Performance</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "88%" } : {}}
                      transition={{ duration: 1.5, delay: 1.2 }}
                      className="bg-[var(--accent-orange)] h-2 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium">88%</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <div className="text-2xl font-bold accent-orange">30%</div>
                    <div className="text-xs text-gray-500">Performance Boost</div>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    <div className="text-2xl font-bold accent-orange">6+</div>
                    <div className="text-xs text-gray-500">Major Projects</div>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    <div className="text-2xl font-bold accent-orange">100%</div>
                    <div className="text-xs text-gray-500">Success Rate</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
