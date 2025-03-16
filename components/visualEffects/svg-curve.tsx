import { useEffect, useRef, useCallback, useState } from "react";

export default function SvgCurve() {
  const path = useRef<SVGPathElement | null>(null);
  const reqId = useRef<number | null>(null);
  const xRef = useRef(0.5); // Use ref for x
  const [progress, setProgress] = useState(0);
  let time = Math.PI / 2;

  const setPath = useCallback((value: number) => {
    const width = window.innerWidth * 0.7;
    path.current?.setAttributeNS(
      null,
      "d",
      `M 0 50 Q ${width * xRef.current} ${50 + value} ${width} 50`
    );
  }, []);

  const animateIn = () => {
    if (reqId.current !== null) {
      cancelAnimationFrame(reqId.current);
      time = Math.PI / 2;
    }
    setPath(progress);
    reqId.current = requestAnimationFrame(animateIn);
  };

  const manageMouseMove = (e: React.MouseEvent) => {
    const { movementY } = e;
    const box = (e.target as HTMLElement).getBoundingClientRect();
    xRef.current = (e.clientX - box.left) / box.width;
    setProgress((prev) => prev + movementY); // Update progress with state
  };

  const resetAnimation = () => {
    if (reqId.current !== null) {
      cancelAnimationFrame(reqId.current);
    }
    animateOut();
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const animateOut = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress * Math.sin(time);
      setPath(newProgress);
      const nextProgress = lerp(prevProgress, 0, 0.04);
      time += 0.2;

      if (Math.abs(nextProgress) > 0.5) {
        reqId.current = requestAnimationFrame(animateOut);
      } else {
        time = Math.PI / 2;
        return 0;
      }
      return nextProgress;
    });
  };

  const handleResize = useCallback(() => {
    setPath(progress);
  }, [progress, setPath]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="line">
      <span
        onMouseEnter={animateIn}
        onMouseLeave={resetAnimation}
        onMouseMove={manageMouseMove}
        className="box"
      ></span>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
