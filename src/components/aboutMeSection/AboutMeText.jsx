import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm a front-end developer with strong skills in HTML, CSS, JavaScript, and React.  
        I've built dozens of projects, completed a variety of development courses, and gained practical experience through an internship.  
        I'm currently finishing a 9-month-long Laravel course to expand into full-stack development.  
        I’m confident in building responsive, user-focused interfaces and contributing clean, efficient code to any team.  
        I’ve also set up and configured my own Linux server with Nginx, giving me hands-on experience with backend infrastructure and deployment.
        I have great knowledge and experience with other tools and technologies like TypeScript, Tailwind CSS, Git, Figma, REST APIs, and more.  
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
