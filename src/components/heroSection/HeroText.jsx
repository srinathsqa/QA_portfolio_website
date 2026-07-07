import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TypewriterEffect from "../ui/TypewriterEffect";

const HeroText = () => {
  const typewriterTexts = [
    "Ensuring software quality through structured testing...",
    "Designing reliable test cases and defect reports...",
    "Automating workflows using Selenium and Java...",
    "Improving product stability through QA practices..."
  ];

  return (
    <div className="flex flex-col gap-6 h-full justify-center md:text-left sm:text-center relative">
      {/* Code-like prefix */}
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="text-green/60 font-mono text-sm"
      >
        <span className="text-green">01.</span> console.log(&quot;portfolio &quot;);
      </motion.div>

      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="lg:text-2xl sm:text-xl uppercase text-white/80 font-light tracking-wider"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-green font-semibold">QA Automation Engineer</span>{" "}
        <span className="text-white/60">&amp;</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-cyan font-semibold">Manual Testing</span>{" "}
        Engineer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="md:text-[3.5rem] lg:text-6xl sm:text-5xl font-bold uppercase relative whitespace-nowrap"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-cyan to-green bg-[length:200%_auto] animate-pulse">
          SRINATH
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-green to-cyan bg-[length:200%_auto] animate-pulse ml-2 md:ml-4">
          S
        </span>
        
        {/* Glitch effect overlay */}
        <div className="absolute inset-0 text-green/20 animate-pulse blur-sm">
          Srinath S
        </div>
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="space-y-4"
      >
        <p className="text-lg text-white/80 leading-relaxed">
          QA Automation Engineer with hands-on experience in Manual and Automation Testing across real-world web applications — building frameworks, designing test cases, and ensuring quality.
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {['Selenium WebDriver', 'Java', 'TestNG', 'BDD Cucumber', 'Maven', 'SQL', 'Jenkins'].map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-green/10 border border-green/20 rounded-lg text-green font-mono uppercase tracking-wider hover:bg-green/20 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Enhanced typing indicator with typewriter effect */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="flex items-center gap-2 text-green/80 font-mono text-sm mt-4"
      >
        <span className="text-green">$</span>
        <TypewriterEffect 
          texts={typewriterTexts}
          speed={80}
          deleteSpeed={40}
          delayBetween={2000}
          cursorColor="green"
          className="text-green/80"
        />
      </motion.div>
    </div>
  );
};

export default HeroText;

