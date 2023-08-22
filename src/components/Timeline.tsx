import SkillsCarousel from "./SkillsCarousel";
import { motion } from "framer-motion"

interface Props {
  title: string;
  description: string;
  isWork: boolean | undefined;
}

const Timeline: React.FC<Props> = ({ title, description, isWork }) => {
  return (

    <div className="pl-8 relative before:content-[' '] before:bg-white before:inline before:absolute before:rounded-full before:border-2 before:-left-2 before:top-1 before:w-4 before:h-4 before:z-40">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <h5 className="text-base font-bold">{title}</h5>
        <p className="text-sm leading-loose pt-2">
          {description}
        </p>
        <div className={`pt-8 ${isWork ? "block" : "hidden"}`}>
          <SkillsCarousel />
        </div>
      </motion.div>

    </div>

  );
};

export default Timeline;