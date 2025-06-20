import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart, Users, Palette, Mic, Trophy, Lightbulb, Award, Medal } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "NullClass",
    period: "Feb 2025 – Present",
    category: "Current Role",
    icon: BarChart,
    responsibilities: [
      "Analyzing large datasets to extract insights and improve business decision-making",
      "Developing interactive dashboards and reports using Power BI and SQL for real-time analytics",
      "Optimizing data pipelines and ensuring data integrity through ETL processes",
    ],
  },
  {
    title: "President",
    company: "Toastmasters Club",
    period: "Oct 2023 – Present",
    category: "Leadership",
    icon: Users,
    responsibilities: [
      "Led and mentored members, fostering communication and leadership skills",
      "Organized and conducted meetings, workshops, and competitions",
      "Managed events efficiently, ensuring seamless execution and engagement",
    ],
  },
  {
    title: "UI/UX Design Intern",
    company: "IconWave",
    period: "Jun 2024 – Jul 2024",
    category: "Design",
    icon: Palette,
    responsibilities: [
      "Collaborated with engineers to optimize UI performance and automate user interactions, reducing latency",
      "Designed responsive, low-latency UI for web and mobile platforms",
      "Ensured seamless integration with backend systems and APIs",
    ],
  },
  {
    title: "Core Team Member",
    company: "TEDxVITAP",
    period: "Mar 2024 – Apr 2024",
    category: "Events",
    icon: Mic,
    responsibilities: [
      "Managed logistics, speaker coordination, and event operations",
      "Ensured a seamless event experience, enhancing organizational and leadership skills",
    ],
  },
];

const achievements = [
  {
    title: "Academic Excellence",
    description: "Topper in school commercial applications",
    icon: Trophy,
  },
  {
    title: "Innovation Winner",
    description: "Designathon (VVIT 2023) - Sustainable Water Mineralization System",
    icon: Lightbulb,
  },
  {
    title: "Sports Champion",
    description: "Represented district and national volleyball teams",
    icon: Award,
  },
  {
    title: "Cultural Excellence",
    description: "Runner-up in VIT-AP and SRM cultural fests",
    icon: Medal,
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            experi<span className="accent-orange">ence</span>
          </h2>
          <p className="text-xl text-gray-600">journey • growth • impact</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid lg:grid-cols-4 gap-8 items-start"
              >
                <div className="lg:text-right">
                  <div className="text-sm text-gray-500">{experience.period}</div>
                  <div className="accent-orange font-medium">{experience.category}</div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="lg:col-span-3 bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{experience.title}</h3>
                      <div className="text-lg text-gray-600">{experience.company}</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <Icon className="accent-orange text-xl" size={24} />
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-700">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full mt-2 mr-3 flex-shrink-0" />
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Achievements & Recognition</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="accent-orange" size={20} />
                  </div>
                  <h4 className="font-bold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
