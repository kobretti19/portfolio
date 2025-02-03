import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="education">
      <Timeline>
        {educationData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const educationData = [
  {
    date: "2024 - 2025",
    title: "JAVASCRIPT ACADEMY",
    subTitle: "Semos Academy Macedonia",
  },
  {
    date: "2011 - 2015",
    title: "INFORMATICS AND COMPUTER TECHNOLOGY",
    subTitle: "UNIVERSITY ST. KLIMENT OHRIDSKI - BITOLA",
  },
  {
    date: "2007 - 2011",
    title: "NATURAL MATHEMATICAL DIRECTION",
    subTitle: "HIGH SCHOOL ST. CYRIL AND METHODIUS - NEGOTINO",
  },
];
