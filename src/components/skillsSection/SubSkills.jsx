const SubSkills = () => {
  return (
    <div className="relative w-full py-20 border-y border-green/20 bg-gradient-to-r from-black via-green/5 to-black text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)] animate-pulse"></div>
      </div>

      {/* Scrolling marquee text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 text-6xl font-bold whitespace-nowrap animate-pulse">
        <div className="animate-marquee-reverse">
          BDD CUCUMBER • PAGE OBJECT MODEL • JENKINS CI/CD • APACHE POI • DATA-DRIVEN TESTING • SELENIUM WEBDRIVER • STLC • TEST AUTOMATION • REGRESSION TESTING • BUG REPORTING • DEFECT TRACKING • MANUAL TESTING • 
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-green to-transparent animate-pulse"></div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-cyan to-transparent animate-pulse"></div>
    </div>
  );
};

export default SubSkills;
