import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const experiences = [
  {
    job: "Digital Marketing Specialist",
    company: "Orange Digital Marketing",
    date: "Dec 2024 – May 2026",
    location: "Chennai, India",
    status: "Completed",
    technologies: ["SEO", "Content Marketing", "Social Media Marketing", "Google Analytics", "Google Ads"],
    responsibilities: [
      " Executed On-Page SEO strategies including keyword research, content optimization, meta implementation, and internal linking",
      "Delivered Premium Link Building Services using white-hat outreach strategies",
      "Executed Social Media Marketing (SMM) campaigns to increase reach and audience interaction",
      "Assisted in PPC Campaign setup and optimization for Google Ads and Bing Ads, improving ROI by 20%",
      "Monitored and analyzed website traffic and user behavior using Google Analytics, providing actionable insights for continuous improvement"
    ],
    link: ""
  },
  {
    job: "Search Engine Optimization Analyst",
    company: "Tick Network",
    date: "Oct 2024 - Dec 2024",
    location: "Chennai, India",
    status: "Completed",
    technologies: ["SEO", "Link Building", "Guest Posting", "Product Optimization"],
    responsibilities: [
      "On-Page Optimization: Optimized META Titles and Descriptions, implemented Image ALT Text, and integrated Blog Schema Markups to improve search engine rankings using Google Keyword Planner and Google Search Console.",
      "Technical SEO: Conducted competitor analysis using SEMrush, identifying SEO gaps and providing actionable insights for GIRI India’s SEO strategy.",
      "Performance Monitoring: Used Google Analytics, Google Search Console, and Tag Manager to monitor traffic, keyword performance, and overall website health.",
      "Google Merchant Center: Managed and optimized product listings, applying SEO best practices to improve visibility and rankings in SERPs.",
      "Link Building: Executed a comprehensive link-building strategy, acquiring high-quality backlinks through guest posting, outreach campaigns, and partnerships with relevant industry websites."
    ],
    link: ""
  },

    {
    job: "Guest Posting Specialist",
    company: "Self - Freelance",
    date: "Jan 2025 - Current",
    location: "Chennai, India",
    status: "Providing Services",
    technologies: ["Off-page SEO", "Guest Posting","Link Building"],
    responsibilities: [
      "Delivered guest posting, off-page SEO, and white-hat link-building services to improve website authority and search engine rankings.",
      "Conducted outreach to relevant websites and secured high-quality backlinks across various niches.",
      "Managed link-building campaigns while ensuring adherence to SEO best practices and client requirements.",
    ],
    link: ""
  }, 

  /*{
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
  }, */

   /* {
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
  }  */
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
            href="https://github.com/srinathsqa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green/10 hover:bg-green/20 text-green px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-green/30"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/srinathsekar/"
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

