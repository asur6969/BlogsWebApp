import { useEffect, useState, useRef, type FC } from "react";
import { useAppSelector } from "../hooks/useAppSelector";

export const InfoContainer: FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { info } = useAppSelector((state) => state.info);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (tooltipRef.current) {
      const { offsetWidth, offsetHeight } = tooltipRef.current;
      setTooltipSize({ width: offsetWidth, height: offsetHeight });
    }
  }, [info]);

  if (!info) return null;

  const offset = 15;
  const screenWidth = window.innerWidth;
  const shouldFlip = position.x + offset + tooltipSize.width > screenWidth;

  const left = shouldFlip
    ? position.x - tooltipSize.width - offset
    : position.x + offset;

  const top = position.y + offset;

  return (
    <div
      ref={tooltipRef}
      className="bg-black text-white px-2 py-1 rounded text-sm fixed pointer-events-none z-50 whitespace-nowrap"
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      {info}
    </div>
  );
};

// import { useEffect, useState, type FC } from "react";
// import { useAppSelector } from "../hooks/useAppSelector";

// export const InfoContainer: FC = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const { info } = useAppSelector((state) => state.info);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []); // ✅ empty array: set up once

//   if (!info) return null;

//   return (
//     <div
//       className="bg-black text-white px-2 py-1 rounded text-sm fixed pointer-events-none z-50"
//       style={{
//         top: `${position.y + 15}px`, // offset below cursor
//         left: `${position.x + 15}px`, // offset to right of cursor
//       }}
//     >
//       {info}
//     </div>
//   );
// };
