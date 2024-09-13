"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

const words = [
  "Hello, please wait I'm a bit nervous",
  "Gathering 3D models",
  "Finding projects",
  "Wrapping it up...",
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}

// "use client";
// import styles from "./style.module.scss";
// import { useEffect, useState, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import { opacity, slideUp } from "./anim";

// const words = [
//   "Hello, please wait I'm a bit nervous",
//   "Gathering 3D models",
//   "Finding projects",
//   "Wrapping it up...",
// ];

// export default function Index() {
//   const [index, setIndex] = useState(0);
//   const [dimension, setDimension] = useState({ width: 0, height: 0 });

//   // Using useLayoutEffect instead of useEffect to avoid window reference issues
//   useLayoutEffect(() => {
//     // Accessing the documentElement to get the width and height
//     const updateDimensions = () => {
//       const { clientWidth, clientHeight } = document.documentElement;
//       setDimension({ width: clientWidth, height: clientHeight });
//     };

//     updateDimensions();

//     window.addEventListener("resize", updateDimensions);
//     return () => {
//       window.removeEventListener("resize", updateDimensions);
//     };
//   }, []);

//   // Updating the word index over time
//   useEffect(() => {
//     if (index === words.length - 1) return;
//     const timeout = setTimeout(
//       () => {
//         setIndex((prevIndex) => prevIndex + 1);
//       },
//       index === 0 ? 1000 : 150
//     );
//     return () => clearTimeout(timeout);
//   }, [index]);

//   // Path calculations based on dimensions
//   const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
//     dimension.height
//   } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
//     dimension.height
//   }  L0 0`;
//   const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
//     dimension.height
//   } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

//   const curve = {
//     initial: {
//       d: initialPath,
//       transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
//     },
//     exit: {
//       d: targetPath,
//       transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
//     },
//   };

//   return (
//     <motion.div
//       variants={slideUp}
//       initial="initial"
//       exit="exit"
//       className={styles.introduction}
//     >
//       {dimension.width > 0 && (
//         <>
//           <motion.p variants={opacity} initial="initial" animate="enter">
//             <span></span>
//             {words[index]}
//           </motion.p>
//           <svg>
//             <motion.path
//               variants={curve}
//               initial="initial"
//               exit="exit"
//             ></motion.path>
//           </svg>
//         </>
//       )}
//     </motion.div>
//   );
// }
