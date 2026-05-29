import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const easing = [0.76, 0, 0.24, 1] as const;

export default function Curve() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const initialPath = `M100 0 L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L100 ${height} Q100 ${height / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: { d: targetPath, transition: { duration: 1, ease: easing } },
    exit: { d: initialPath, transition: { duration: 0.8, ease: easing } },
  };

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px] h-full stroke-none fill-background">
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
    </svg>
  );
}
