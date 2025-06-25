// // src/components/Ripple.js
// import React, { memo } from "react";
// import "/Users/aryushikapoor/react-huddler-website/src/pages/circles/circles.css"; // different CSS just for this page

// function cn(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

// export const CirclesRipple = memo(function CirclesRipple({
//     mainCircleSize = 210,
//     mainCircleOpacity = 0.24,
//     numCircles = 8,
//     className,
//     ...props
// }) {
//     return (
//         <div
//             className={cn(
//                 "circles-ripple-wrapper",
//                 className
//             )}
//             {...props}
//         >
//             {Array.from({ length: numCircles }, (_, i) => {
//                 const size = mainCircleSize + i * 70;
//                 const opacity = mainCircleOpacity - i * 0.03;
//                 const animationDelay = `${i * 0.06}s`;

//                 return (
//                     <div
//                         key={i}
//                         className="circles-ripple-circle"
//                         style={{
//                             "--i": i,
//                             width: `${size}px`,
//                             height: `${size}px`,
//                             opacity,
//                             animationDelay,
//                             borderStyle: "solid",
//                             borderWidth: "1px",
//                             borderColor: "#ffffff33",
//                             top: "50%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%) scale(1)",
//                         }}
//                     />
//                 );
//             })}
//         </div>
//     );
// });
