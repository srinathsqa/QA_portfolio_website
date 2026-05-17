import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import ComingSoonProject from "./ComingSoonProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
  return (
    <div
      id="projects"
      className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 py-10 sm:py-20"
    >
      <motion.div
        variants={fadeIn("top", 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 sm:gap-32 w-full max-w-6xl mx-auto mt-16">
        <motion.div
          variants={fadeIn("right", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="Para Bank Automation"
            year="2026"
            align="right"
            image="/images/website-img-1.jpg"
            link="https://github.com/deepaksekarqa/parabank-bdd-framework"
            badge="6/6 Passed ✓"
            description="End-to-end BDD Cucumber framework for a banking app. 6 Gherkin scenarios — 6/6 passed. Jenkins CI/CD pipeline with BUILD SUCCESS. SQL/JDBC backend validation."
            tags={["Java", "Selenium", "BDD Cucumber", "Jenkins", "TestNG", "Maven"]}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="OrangeHRM HR Automation"
            year="2026"
            align="left"
            image="/images/website-img-3.jpg"
            link="https://github.com/deepaksekarqa/orangehrm-automation-testing"
            badge="7/7 Passed ✓"
            description="Data-Driven Testing using Apache POI reading employee data from Excel. @DataProvider ran tests 3x dynamically. 7/7 test executions passed."
            tags={["Java", "Selenium", "Apache POI", "TestNG", "Maven", "POM"]}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="SauceDemo Manual Testing"
            year="2025"
            align="right"
            image="/images/website-img-2.webp"
            link="https://github.com/deepaksekarqa/saucedemo-manual-testing-project"
            badge="60/63 Passed ✓"
            description="Full STLC manual testing — 8 QA artifacts produced. 63 test cases across 6 modules. 60/63 passed. 4 defects found, logged, and traced via RTM."
            tags={["Manual Testing", "STLC", "Bug Reporting", "RTM", "Test Cases"]}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="SauceDemo Automation"
            year="2025"
            align="left"
            image="/images/website-img-4.jpg"
            link="https://github.com/deepaksekarqa/saucedemo-automation-testing"
            badge="5/5 Passed ✓"
            description="Login to logout automation framework. Page Object Model architecture. WebDriverManager for driver management. 5/5 tests passed."
            tags={["Java", "Selenium", "TestNG", "Maven", "POM"]}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="KFC India React Automation"
            year="2026"
            align="right"
            image="/images/website-img-5.jpg"
            link="https://github.com/deepaksekarqa/kfc-react-automation-framework"
            badge="5/5 Passed ✓"
            description="Automated a live React SPA. WaitHelper utility with lazy initializer, JavascriptExecutor for sticky header bypass. Explicit Waits throughout. 5/5 passed."
            tags={["Java", "Selenium", "Explicit Waits", "React SPA", "TestNG"]}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="FullyFilmy E-Commerce Automation"
            year="2026"
            align="left"
            image="/images/website-img-6.jpg"
            link="https://github.com/deepaksekarqa/fullyfilmy-ecommerce-automation"
            badge="5/5 Passed ✓"
            description="Shopify e-commerce automation with dynamic cart operations. Parameterised selectProduct() and removeProduct() methods. 5/5 tests passed."
            tags={["Java", "Selenium", "TestNG", "Maven", "POM"]}
          />
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="mt-20"
      >
        <ComingSoonProject />
      </motion.div>
    </div>
  );
};

export default ProjectsMain;