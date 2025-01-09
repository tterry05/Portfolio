import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Journey</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              description: "Computer Science Junior with a passion for software development and innovation.",
            },
            {
              icon: Briefcase,
              title: "Experience",
              description: "Quality Assurance intern at Baird, transitioning to Software Development.",
            },
            {
              icon: Code,
              title: "Skills",
              description: "Proficient in C#, Selenium, Azure DevOps, and React Native development.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-secondary/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;