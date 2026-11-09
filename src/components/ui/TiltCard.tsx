import { type ReactNode, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  className,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18 };
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(201,168,76,0.25), transparent 60%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        boxShadow: hovered ? "0 25px 60px -15px rgba(201,168,76,0.35)" : "none",
        transition: "box-shadow 0.3s",
        position: "relative",
        height: "100%",
      }}
      className={className}
    >
      {glare && (
        <motion.div
          aria-hidden
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            zIndex: 20,
            borderRadius: "inherit",
            opacity: hovered ? 1 : 0,
            background: glareBackground,
            transition: "opacity 0.3s",
          }}
        />
      )}
      <div style={{ transform: "translateZ(30px)", position: "relative", zIndex: 10, height: "100%" }}>
        {children}
      </div>
    </motion.div>
  );
}
