import { Link } from "react-scroll";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TypewriterEffect from "../ui/TypewriterEffect";

const AboutMeText = () => {
  const highlights = [
    "Software Test Engineer",
    "Manual Testing Specialist",
    "Selenium Automation Learner",
    "API Testing Explorer",
    "Defect Analysis Enthusiast",
    "Quality Assurance Advocate",
  ];

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center space-y-6 relative">
      {/* Section indicator */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-green font-mono text-sm">02.</span>
        <div className="w-16 h-[1px] bg-gradient-to-r from-green to-transparent"></div>
      </div>

      {/* Enhanced heading */}
      <motion.h2
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="text-6xl md:text-7xl font-bold mb-8 relative"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-green to-cyan bg-[length:200%_auto] animate-gradient-shift">
          About Me
        </span>

        {/* Glitch effect overlay */}
        <div className="absolute inset-0 text-green/20 blur-sm animate-pulse">
          About Me
        </div>
      </motion.h2>

      {/* Dynamic typewriter subtitle */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="text-green font-mono text-sm">$</span>
        <TypewriterEffect
          texts={highlights}
          speed={40}
          deleteSpeed={20}
          delayBetween={1000}
          cursorColor="green"
          className="text-green/80 font-mono"
        />
      </motion.div>

      {/* Enhanced description */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="space-y-4 text-white/80 leading-relaxed"
      >
        <p className="text-lg">
          I&apos;m Srinath, QA Automation Engineer with hands-on experience in Manual Testing and Selenium Automation for real-world web applications. My background in SEO analysis and client-facing roles has strengthened my analytical thinking, attention to detail, and problem-solving abilities.
        </p>

        <p className="text-lg">
          I&apos;m currently building expertise in Selenium WebDriver, Java, TestNG, Maven, SQL, and API Testing, along with framework development using the Page Object Model (POM). I also have exposure to CI/CD workflows and version control tools such as Git.
        </p>

        <p className="text-lg">
          I&apos;m passionate about ensuring software quality through structured testing methodologies, automation frameworks, and defect tracking practices. I enjoy identifying issues, improving application reliability, and contributing to seamless user experiences.
        </p>
        <p className="text-lg">
          Ex Digital Marketer
        </p>
      </motion.div>

      {/* Key skills indicators */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="flex flex-wrap gap-4 mt-8"
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-green/10 border border-green/20 rounded-lg hover:bg-green/20 transition-colors duration-300">
          <FaCode className="text-green text-sm" />
          <span className="text-green font-mono text-sm">Test Case Design</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-cyan/10 border border-cyan/20 rounded-lg hover:bg-cyan/20 transition-colors duration-300">
          <FaRocket className="text-cyan text-sm" />
          <span className="text-cyan font-mono text-sm">Bug Detection</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-yellow/10 border border-yellow/20 rounded-lg hover:bg-yellow/20 transition-colors duration-300">
          <FaLightbulb className="text-yellow text-sm" />
          <span className="text-yellow font-mono text-sm">Automation Testing</span>
        </div>
      </motion.div>

      {/* Enhanced CTA button */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="mt-10"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-green/50 rounded-xl font-mono text-sm uppercase tracking-wider text-green hover:bg-green/10 hover:border-green hover:shadow-neon transition-all duration-300 hover:scale-105 md:self-start sm:self-center cursor-pointer"
        >
          <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
          <span>View My Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-cyan/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </Link>
      </motion.div>

      {/* Code decoration */}
      <div className="absolute -bottom-4 -left-4 text-green/20 font-mono text-xs opacity-50">
        &lt;/about&gt;
      </div>
    </div>
  );
};

export default AboutMeText;

