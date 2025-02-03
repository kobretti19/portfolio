import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experienceData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            link={ex.link}
            subTitle={ex.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const experienceData = [
  {
    date: "2019 - Now",
    title: "Service Programing and repair Home Audio Systems",
    subTitle: "Dynavox Electronics SA",
    link: "https://www.dynavox.ch/de/index.php",
  },
  {
    date: "2018 - 2019",
    title: "Installation of Video surveillance and alarm Systems",
    subTitle: "Reist Radio TV",
    link: "https://reisttv.ch/",
  },
  {
    date: "2014 - 2018",
    title: "Service and sales of Computers",
    subTitle: "MP-Electronic",
  },
];
