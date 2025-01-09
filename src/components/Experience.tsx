import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Baird",
    period: "Summer 2024",
    description: "Upcoming role focused on software development and engineering practices.",
  },
  {
    title: "Quality Assurance Intern",
    company: "Baird",
    period: "Present",
    description: "Working on automated testing using Selenium and C#, contributing to quality assurance processes.",
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-secondary" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Professional Journey</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <span className="text-white/60 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-white/80">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;