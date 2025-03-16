import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ProjectsCard() {
  return (
    <Card title="My Projects">
      <Timeline>
        {projectsData.map((project, i) => (
          <TimelineItem
            key={i}
            date={project.date}
            title={project.title}
            link={project.link}
            subTitle={project.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const projectsData = [
  {
    date: "2024",
    title: "Javascript",
    subTitle: "search Country",
    link: "https://www.dynavox.ch/de/index.php",
  },
  {
    date: "2024",
    title: "ReactJS",
    subTitle: "tic-tac-toe",
    link: "https://martin-tic-tac-toe.netlify.app/",
  },
  {
    date: "2025",
    title: "ReactJS",
    subTitle: "react-quiz app",
    link: "https://quiz-martin.netlify.app/",
  },
  {
    date: "2024",
    title: "ReactJS",
    subTitle: "ananas Web-Site-Clone",
  },
  {
    date: "2025",
    title: "Next.js",
    subTitle: "portfolio",
  },
];
