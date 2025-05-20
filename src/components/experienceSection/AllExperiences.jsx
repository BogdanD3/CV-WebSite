import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Self Studying - Course",
    date: "2023",
    responsibilities: [
      "Building strong fundamentals in HTML-CSS-JS.",
      "Implementing reusable components.",
      "Working on the performance of web applications.",
      "Mastering the basics of Git.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Self Studying / Internship",
    date: "2024",
    responsibilities: [
      "Learning advanced State Management with Redux.",
      "Building first team project using Typescript.",
      "Became proficient with other libraries like React-Router, Axios, and Ant-Design.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Self Studying - Courses",
    date: "2025",
    responsibilities: [
      "Built strong fundamentals in PHP and MySQL.",
      "Learning Laravel and building REST APIs.",
      "Building full scale web applications.",
      "Built personal webserver using Nginx",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
