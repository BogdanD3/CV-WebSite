import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Online Library",
    year: "May 2024",
    align: "right",
    image: `${import.meta.env.BASE_URL}images/website-1.jpg`,
    link: "#",
  },
  {
    name: "Rent a Car",
    year: "Sept 2024",
    align: "left",
    image: `${import.meta.env.BASE_URL}images/website-2.jpg`,
    link: "#",
  },
  {
    name: "NEsto",
    year: "Jan 2025",
    align: "right",
    image: `${import.meta.env.BASE_URL}images/website-img-3.jpg`,
    link: "#",
  },
  {
    name: "E-Commerce",
    year: "Ongoing Project",
    align: "left",
    image: `${import.meta.env.BASE_URL}images/website-4.jpg`,
    link: "#",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
