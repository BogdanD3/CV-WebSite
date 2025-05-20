import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/bogdan-delic-a5412824b/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/BogdanD3" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/delicbogdan_/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
