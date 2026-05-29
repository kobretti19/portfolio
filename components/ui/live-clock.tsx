import { FC, useEffect, useState } from "react";

interface LiveClockProps {
  timeZone: string;
}

const formatter = (tz: string) =>
  new Intl.DateTimeFormat("de-CH", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: tz,
    hour12: false,
  });

const LiveClock: FC<LiveClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      setTime(formatter(timeZone).format(new Date()));
    };
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone]);

  const city = timeZone.split("/")[1];

  return (
    <div className="text-3xl text-secondary-foreground font-semibold" aria-live="polite" aria-label="Current time">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw]">
          <span>{city}</span>,<span>{time}</span>
        </div>
      ) : (
        <div aria-hidden="true">&nbsp;</div>
      )}
    </div>
  );
};

export default LiveClock;
