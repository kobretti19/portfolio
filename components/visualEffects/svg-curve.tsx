import { useEffect, useRef, useCallback } from "react";

export default function SvgCurve() {
  const path = useRef<SVGPathElement | null>(null);
  const reqId = useRef<number | null>(null);
  const progress = useRef(0);
  const xRef = useRef(0.5);
  const time = useRef(Math.PI / 2);

  const setPath = useCallback((value: number) => {
    const width = window.innerWidth * 0.7;
    path.current?.setAttributeNS(
      null,
      "d",
      `M 0 50 Q ${width * xRef.current} ${50 + value} ${width} 50`
    );
  }, []);

  const animateOut = useCallback(() => {
    const prevProgress = progress.current;
    const newProgress = prevProgress * Math.sin(time.current);
    setPath(newProgress);
    const nextProgress = prevProgress + (0 - prevProgress) * 0.04;
    time.current += 0.2;
    progress.current = nextProgress;

    if (Math.abs(nextProgress) > 0.5) {
      reqId.current = requestAnimationFrame(animateOut);
    } else {
      progress.current = 0;
      time.current = Math.PI / 2;
      setPath(0);
    }
  }, [setPath]);

  const animateIn = useCallback(() => {
    if (reqId.current !== null) {
      cancelAnimationFrame(reqId.current);
    }
    time.current = Math.PI / 2;
    reqId.current = requestAnimationFrame(function tick() {
      setPath(progress.current);
      reqId.current = requestAnimationFrame(tick);
    });
  }, [setPath]);

  const resetAnimation = useCallback(() => {
    if (reqId.current !== null) {
      cancelAnimationFrame(reqId.current);
    }
    animateOut();
  }, [animateOut]);

  const manageMouseMove = useCallback((e: React.MouseEvent) => {
    const { movementY } = e;
    const box = (e.target as HTMLElement).getBoundingClientRect();
    xRef.current = (e.clientX - box.left) / box.width;
    progress.current += movementY;
  }, []);

  const handleResize = useCallback(() => {
    setPath(progress.current);
  }, [setPath]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (reqId.current !== null) cancelAnimationFrame(reqId.current);
    };
  }, [handleResize]);

  return (
    <div className="line">
      <span
        onMouseEnter={animateIn}
        onMouseLeave={resetAnimation}
        onMouseMove={manageMouseMove}
        className="box"
      />
      <svg>
        <path ref={path} />
      </svg>
    </div>
  );
}
