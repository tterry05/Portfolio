import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-secondary" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          <a
            href="#"
            className="bg-white/5 hover:bg-white/10 text-white p-4 rounded-full transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="bg-white/5 hover:bg-white/10 text-white p-4 rounded-full transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="bg-white/5 hover:bg-white/10 text-white p-4 rounded-full transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;