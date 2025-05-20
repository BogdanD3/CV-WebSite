import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="bogdandelic82@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+382 69 990 575" Image={FiPhone} />
      <SingleInfo text="Montenegro, Niksic" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
