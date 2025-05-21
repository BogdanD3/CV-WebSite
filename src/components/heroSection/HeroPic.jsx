import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div>
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src={`${import.meta.env.BASE_URL}images/HexaPic.png`}
        alt="Bogdan Img"
        className="max-h-[450px] w-auto relative -top-16"
      />

<div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
    <div className=" absolute -z-10 flex justify-center items-center animate-pulse top-[-50px] left-[-50px] ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[50px] w-auto text-cyan animate-[spin_20s_linear_infinite] opacity-40" />
      </div>
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse top-[50px] left-[450px] ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[50px] w-auto text-cyan animate-[spin_reverse_20s_linear_infinite] opacity-40 " />
      </div>
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse top-[350px] left-[600px] ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[50px] w-auto text-cyan animate-[spin_20s_linear_infinite] opacity-40" />
      </div>
    </div>
  );
};

export default HeroPic;
