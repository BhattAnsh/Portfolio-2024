import clsx from "clsx";
import { motion } from "framer-motion";

type props = {
    text:string,
}
export function WordPullUp({text}:props) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const words = text;
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={clsx(
            "text-center font-display font-bold drop-shadow-sm",
            "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            "tracking-[-0.02em]",
            "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
            "text-5xl font-bold text-neutral-500 dark:text-neutral-500"
          )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "15px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}