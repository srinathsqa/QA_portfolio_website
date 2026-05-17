import SingleSkill from "./SingleSkill";
import { FaJava, FaDatabase, FaBug, FaTools, FaGithub, FaFileExcel } from "react-icons/fa";
import { SiSelenium, SiJenkins, SiCucumber, SiApachemaven, SiJira, SiEclipseide } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import PropTypes from "prop-types";

const skills = [
  {
    skill: "Selenium",
    icon: SiSelenium,
    color: "text-green-500",
    bgColor: "from-green-500/20 to-emerald-500/20",
    proficiency: "Expert",
    progress: 90
  },
  {
    skill: "Java",
    icon: FaJava,
    color: "text-red-500",
    bgColor: "from-red-500/20 to-orange-600/20",
    proficiency: "Expert",
    progress: 90
  },
  {
    skill: "TestNG",
    icon: FaTools,
    color: "text-blue-500",
    bgColor: "from-blue-500/20 to-cyan-500/20",
    proficiency: "Expert",
    progress: 85
  },
  {
    skill: "Cucumber BDD",
    icon: SiCucumber,
    color: "text-green-400",
    bgColor: "from-green-400/20 to-lime-400/20",
    proficiency: "Advanced",
    progress: 85
  },
  {
    skill: "Maven",
    icon: SiApachemaven,
    color: "text-red-400",
    bgColor: "from-red-400/20 to-orange-400/20",
    proficiency: "Intermediate",
    progress: 80
  },
  {
    skill: "SQL",
    icon: FaDatabase,
    color: "text-blue-400",
    bgColor: "from-blue-400/20 to-indigo-400/20",
    proficiency: "Intermediate",
    progress: 75
  },
  {
    skill: "Jenkins",
    icon: SiJenkins,
    color: "text-gray-300",
    bgColor: "from-gray-300/20 to-gray-500/20",
    proficiency: "Intermediate",
    progress: 70
  },
  {
    skill: "JIRA",
    icon: SiJira,
    color: "text-blue-500",
    bgColor: "from-blue-500/20 to-blue-700/20",
    proficiency: "Intermediate",
    progress: 75
  },
  {
    skill: "Manual Testing",
    icon: FaBug,
    color: "text-yellow-400",
    bgColor: "from-yellow-400/20 to-orange-400/20",
    proficiency: "Expert",
    progress: 95
  },
  {
    skill: "Git / GitHub",
    icon: FaGithub,
    color: "text-gray-100",
    bgColor: "from-gray-100/20 to-gray-400/20",
    proficiency: "Intermediate",
    progress: 80
  },
  {
    skill: "Apache POI",
    icon: FaFileExcel,
    color: "text-green-500",
    bgColor: "from-green-500/20 to-emerald-500/20",
    proficiency: "Intermediate",
    progress: 75
  },
  {
    skill: "Eclipse IDE",
    icon: SiEclipseide,
    color: "text-indigo-500",
    bgColor: "from-indigo-500/20 to-purple-500/20",
    proficiency: "Advanced",
    progress: 85
  },
];

const AllSkills = ({ activeTab = "All" }) => {
  const filteredSkills = skills.filter(item => {
    if (activeTab === "All") return true;
    if (activeTab === "Automation") {
      return ["Selenium", "Java", "TestNG", "Cucumber BDD", "Maven", "Apache POI"].includes(item.skill);
    }
    if (activeTab === "Manual Testing") {
      return ["Manual Testing", "JIRA", "SQL", "Eclipse IDE"].includes(item.skill);
    }
    if (activeTab === "CI/CD & Tools") {
      return ["Jenkins", "Git / GitHub", "Apache POI", "Eclipse IDE"].includes(item.skill);
    }
    return true;
  });

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 my-12 px-4 max-w-6xl mx-auto">
      <AnimatePresence mode="popLayout">
        {filteredSkills.map((item, index) => {
          return (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              key={item.skill}
            >
              <SingleSkill
                text={item.skill}
                imgSvg={<item.icon />}
                proficiency={item.proficiency}
                progress={item.progress}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

AllSkills.propTypes = {
  activeTab: PropTypes.string,
};

export default AllSkills;
