import React from "react";
import { motion } from "framer-motion";

const SocialIcons = ({ Icons  }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
            <a className="link" href={icon.link} target="_blank">
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full text-gray-100 mx-1.5 text-2xl "
        >
       <motion.div
        whileHover={{ scale: 1.3 }}
         >   
       <ion-icon name={icon.name}></ion-icon>
       </motion.div>  
        </span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;