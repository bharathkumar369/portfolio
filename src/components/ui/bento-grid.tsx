import { cn } from "@/utils/cn";
import { easeOut, motion } from "framer-motion";

export const BentoGrid = ({
  
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  button,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?:String;
  button?:String;
}) => {
  return (
    <motion.div

      animate= {{y:100}}
      transition={{ ease:"easeOut",duration:0.8,}}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-myOrange bg-white border border-transparent justify-between flex flex-col space-y-4",
        className,
        
      )}
    >
        <div className="group-hover/bento:translate-x-2 transition duration-200 cursor-pointer">
          {image}
        </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <section className="flex flex-row">
          <motion.button 
            className="border-myOrange"
            whileHover={{
              scale:[null,1.4,1.5]
            }}
            transition={{duration:0.3}}
          >
            {icon}
          </motion.button>
          <div>{button}</div>
        </section>
        <div className="font-sans font-bold text-myOrange dark:text-myOrange mb-2 mt-5">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
