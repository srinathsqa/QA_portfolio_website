import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const experiences = [
  {
    job: "QA Automation Intern",
    company: "BDreamz Global Solutions Pvt. Ltd.",
    date: "Dec 2025 – May 2026",
    location: "Chennai, India",
    status: "Current",
    technologies: ["Java", "Selenium WebDriver", "TestNG", "BDD Cucumber", "Maven", "Jenkins"],
    responsibilities: [
      "Built and executed automation frameworks across real-world web applications",
      "Delivered end-to-end projects for banking (ParaBank), HR (OrangeHRM), and e-commerce (SauceDemo, KFC India, FullyFilmy) domains",
      "Configured Jenkins CI/CD pipeline and implemented Data-Driven Testing using Apache POI",
      "Awarded internship completion certificate upon successful project delivery"
    ],
    link: ""
  },
  {
    job: "SEO Specialist",
    company: "Freelance",
    date: "Nov 2024 - Mar 2026",
    location: "Chennai, India",
    status: "Completed",
    technologies: ["SEO", "Link Building", "Guest Posting"],
    responsibilities: [
      "Executed guest posting and backlink acquisition strategies for clients across multiple niches",
      "Tracked SEO trends and tool outputs to continuously refine optimisation approaches for client projects",
      "Collaborated directly with clients to understand project goals, manage expectations, and deliver regular updates"
    ],
    link: ""
  },
  {
    job: "Marketing Executive",
    company: "Lupin Limited",
    date: "Feb 2024 - Oct 2024",
    location: "Chennai, India",
    status: "Completed",
    technologies: ["CRM", "Doctor Engagement", "CME Programs"],
    responsibilities: [
      "Maintained excellent territory sales targets through strategic engagement",
      "Conducted CME programs for healthcare professionals",
      "Maintained CRM databases and analyzed prescription trends",
      "Ensured ethical marketing practices were upheld"
    ],
    link: ""
  },
  {
    job: "Marketing Executive",
    company: "Micro Labs Limited",
    date: "Jul 2023 - Jan 2024",
    location: "Chennai, India",
    status: "Completed",
    technologies: ["Healthcare", "Sales", "Data Tracking"],
    responsibilities: [
      "Promoted pharmaceutical products to healthcare professionals",
      "Monitored prescription trends and optimized outreach",
      "Collaborated with internal teams to drive regional growth"
    ]
  },
  {
    job: "SEO Analyst",
    company: "Iyanar Infotech Private Limited",
    date: "Jan 2021 - Nov 2022",
    location: "Chennai, India",
    status: "Completed",
    technologies: ["Google Analytics", "Search Console", "Ahrefs"],
    responsibilities: [
      "Boosted organic search traffic by 40% in 6 months through strategic keyword research and on-page optimisation",
      "Improved SERP rankings by 25% for high-value keywords via data-driven content strategies",
      "Acquired 50+ high-authority backlinks, increasing domain authority by 15 points in 3 months",
      "Delivered monthly SEO performance reports using Google Analytics, Search Console, and Ahrefs — achieving consistent 10% MoM organic growth"
    ]
  }
];

const AllExperiences = () => {
  return (
    <div className="mt-16">
      {/* Section header */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-green to-cyan mx-auto rounded-full"></div>
      </motion.div>

      {/* Timeline layout for larger screens, stacked for mobile */}
      <div className="relative">
        {/* Timeline line - hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green via-cyan to-green rounded-full opacity-30" style={{ height: 'calc(100% - 40px)', top: '20px' }}></div>

        {/* Experience cards with integrated timeline dots */}
        <div className="space-y-8 lg:space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index % 2 === 0 ? "left" : "right", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
              className="relative"
            >
              {/* Timeline dot positioned relative to each card */}
              <div className="hidden lg:block absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 bg-green rounded-full border-4 border-gray-900 z-20 shadow-lg shadow-green/30">
                <div className="absolute inset-0 bg-green rounded-full animate-ping opacity-30"></div>
              </div>

              {/* Experience card with alternating layout */}
              <div className={`lg:flex lg:items-start ${index % 2 === 0
                ? 'lg:flex-row lg:justify-start'
                : 'lg:flex-row-reverse lg:justify-start'
                }`}>
                {/* Experience content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <SingleExperience experience={experience} index={index} />
                </div>

                {/* Spacer for timeline center */}
                <div className="hidden lg:block lg:w-2/12"></div>

                {/* Empty space on opposite side */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-black/30 backdrop-blur-sm rounded-2xl border border-green/20"
      >
        <h3 className="text-xl font-bold text-white mb-4">Let&apos;s Work Together</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and exciting projects.
          Feel free to reach out if you&apos;d like to collaborate!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/deepaksekarqa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green/10 hover:bg-green/20 text-green px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-green/30"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/deepaksekar7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan/10 hover:bg-cyan/20 text-cyan px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-cyan/30"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AllExperiences;

