import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
          Computer Science Junior
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building the Future
          <br /> Through Code
        </h1>
        <p className="text-secondary/60 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Passionate software developer with experience in automated testing, web development,
          and game streaming technologies.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;