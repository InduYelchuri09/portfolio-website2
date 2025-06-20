import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart, Smartphone, Code, TrendingUp, Cloud, PieChart } from "lucide-react";

const projects = [
  {
    title: "Power BI Data Pipeline Optimization",
    description: "Streamlined data processing pipelines, improved query performance by 30%, and created interactive dashboards for data-driven insights.",
    tags: ["Power BI", "SQL", "ETL"],
    icon: BarChart,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    title: "Optimized UI Design for Performance Systems",
    description: "Developed microservices-based UI components to minimize memory overhead and improve application responsiveness.",
    tags: ["UI/UX", "Microservices", "Performance"],
    icon: Smartphone,
    gradient: "from-gray-800 to-black",
  },
  {
    title: "Full-Stack Ticket Booking System",
    description: "Designed and deployed a scalable booking platform using Spring Boot and Angular, integrating REST APIs and enhancing user experience.",
    tags: ["Spring Boot", "Angular", "REST API"],
    icon: Code,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Real-Time Google Play Store Analytics",
    description: "Built a data analytics platform using Python to analyze app metrics, visualizing trends and generating actionable insights.",
    tags: ["Python", "Analytics", "Visualization"],
    icon: TrendingUp,
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Angular Weather Application",
    description: "Created a real-time weather application using Angular and external APIs, applying front-end development and asynchronous programming.",
    tags: ["Angular", "APIs", "Real-time"],
    icon: Cloud,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "Interactive Stock Market Dashboard",
    description: "Used Pandas for data manipulation and built an interactive Tableau dashboard with line charts, histograms for stock market analysis.",
    tags: ["Tableau", "Pandas", "Finance"],
    icon: PieChart,
    gradient: "from-purple-500 to-pink-600",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            port<span className="accent-orange">folio</span>
          </h2>
          <p className="text-xl text-gray-600">exhibitions • showcases • innovations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className="text-white text-4xl" size={48} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="accent-orange font-medium text-sm group-hover:text-black transition-colors cursor-pointer"
                    onClick={() => window.open('https://github.com/InduYelchuri09', '_blank')}
                  >
                    View Project →
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
