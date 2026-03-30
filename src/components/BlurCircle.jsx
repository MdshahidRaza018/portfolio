// import React from 'react'

// const BlurCircle = ({top="auto",left="auto",right="auto",bottom="auto"}) => {
//   return (
//     <div className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-accent blur-3xl" style={{top:top,right:right,left:left,bottom:bottom}} >
//     </div>
//   )
// }

// export default BlurCircle
import React from "react";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  size = 250,
  opacity = 0.4,
}) => {
  return (
    <div
      className="absolute rounded-full bg-accent blur-[120px] pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        opacity,
        zIndex: -1,
      }}
    />
  );
};

export default BlurCircle;
