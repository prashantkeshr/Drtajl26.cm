import { useRef, useEffect } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        pointerEvents: "none",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 0,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "rgba(0, 212, 170, 0.025)",
        filter: "blur(80px)",
        transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      }}
    />
  );
}
