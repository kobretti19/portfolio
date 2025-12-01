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
            link={ex.link}
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
    link: 'Cisco_Certificate_Routing_Protocols_and_Concepts.pdf',
  },
  {
    date: '2014 - 2015',
    title: 'CCNA EXPLORATION:NETWORK FUNDAMENTALS',
    subTitle: 'UNIVERSITY ST. KLIMENT OHRIDSKI - BITOLA',
    link: 'Cisco_Certificate_Network.pdf',
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
    link: 'https://www.udemy.com/certificate/UC-944bfc3d-e35a-49ed-9e27-ae8b07ac145b/',
  },
  {
    date: '2025',
    title: 'Query and modify data with Transact-SQL',
    subTitle: 'Semos Academy Skopje',
    link: 'SQL_ Microsoft Learn.pdf',
  },
  {
    date: '2025',
    title: 'The Ultimate MySQL Bootcamp',
    subTitle: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-dd46be57-c3c9-4352-b1a3-7a1fce89fdf3/',
  },
  {
    date: '2025',
    title: 'Microsoft Excel : Business Intelligence w/ Power Query & DAX',
    subTitle: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-73912a56-f881-43a4-9510-4f9f1c712639/',
  },
  {
    date: '2025',
    title: 'Analyzing Data with Excel and Essential Statistics',
    subTitle: 'Semos education',
    link: 'Excel 2025.pdf',
  },
  {
    date: '2025',
    title: 'Microsoft Power BI Desktop for Business Intelligence',
    subTitle: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-9aabee0d-e50f-4dd4-95ce-811983945964/',
  },

  {
    date: '2025',
    title: 'PL-300: Design and manage analytics solutions using Power BI',
    subTitle: 'Semos education',
    link: 'Martin Petroski- certificate PowerBI.pdf',
  },
];
