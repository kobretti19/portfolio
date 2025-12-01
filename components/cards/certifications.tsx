import Card from '../ui/card';
import { Timeline, TimelineItem } from '../ui/timeline';

export default function CertificationsCard() {
  return (
    <Card title='Certifications'>
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
    date: '2014 - 2015',
    title: 'CCNA EXPLORATION: ROUTING PROTOCOLS AND CONCEPTS',
    subTitle: 'UNIVERSITY ST. KLIMENT OHRIDSKI - BITOLA',
  },
  {
    date: '2014 - 2015',
    title: 'CCNA EXPLORATION:NETWORK FUNDAMENTALS',
    subTitle: 'UNIVERSITY ST. KLIMENT OHRIDSKI - BITOLA',
  },
  {
    date: '2024 - 2025',
    title: 'Java Script developer on the web application',
    subTitle: 'Javascript Academy Skopje',
  },

  {
    date: '2024 - 2025',
    title: 'Practical Linux Command Line 2.0',
    subTitle: 'Udemy',
  },
  {
    date: '2025',
    title: 'Query and modify data with Transact-SQL',
    subTitle: 'Semos Academy Skopje',
  },
  {
    date: '2025',
    title: 'The Ultimate MySQL Bootcamp',
    subTitle: 'Udemy',
  },
  {
    date: '2025',
    title: 'Microsoft Excel : Business Intelligence w/ Power Query & DAX',
    subTitle: 'Udemy',
  },
  {
    date: '2025',
    title: 'Microsoft Excel : Business Intelligence w/ Power Query & DAX',
    subTitle: 'Udemy',
  },
  {
    date: '2025',
    title: 'Microsoft Power BI Desktop for Business Intelligence',
    subTitle: 'Udemy',
  },

  {
    date: '2025',
    title: 'PL-300: Design and manage analytics solutions using Power BI',
    subTitle: 'Semos education',
  },
];
