import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function CertificationsCard() {
  return (
    <Card title="Certifications">
      <Timeline>
        {certificationsData.map((ex, i) => (
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

const certificationsData = [
  {
    date: "2014 - 2015",
    title: "CCNA EXPLORATION: ROUTING PROTOCOLS AND CONCEPTS",
    subTitle: "UNIVERSITY ST. KLIMENT OHRIDSKI - BITOLA",
  },
  {
    date: "2014 - 2015",
    title: "CCNA EXPLORATION:NETWORK FUNDAMENTALS",
    subTitle: "UNIVERSITY ST. KLIMENT OHRIDSKI - BITOLA",
  },
];
