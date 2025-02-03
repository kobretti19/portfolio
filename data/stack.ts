import TailwindImg from "@/public/assets/images/stack/tailwind.png";
import CSSImg from "@/public/assets/images/stack/css-logo.png";
import HTMLImg from "@/public/assets/images/stack/html5.png";
import JSImg from "@/public/assets/images/stack/js.png";
import nodeImg from "@/public/assets/images/stack/nodejs.png";
import expressImg from "@/public/assets/images/stack/Expressjs.png";
import mongodbImg from "@/public/assets/images/stack/mongodb.png";
import ReactImg from "@/public/assets/images/stack/react.png";
import nextjsImg from "@/public/assets/images/stack/nextjs.png";

export const stackData = [
  {
    title: "Basics",
    stack: [
      {
        id: 0,
        title: "HTML",
        image: HTMLImg,
        bgColor: "",
      },
      {
        id: 1,
        title: "CSS",
        image: CSSImg,
        bgColor: "",
      },
      {
        id: 2,
        title: "Javasctript",
        image: JSImg,
        bgColor: "",
      },
    ],
  },
  {
    title: "Styling / FWs",
    stack: [
      {
        id: 4,
        title: "Tailwind css",
        image: TailwindImg,
        bgColor: "",
      },
    ],
  },
  {
    title: "Frontend / FWs",
    stack: [
      {
        id: 5,
        title: "React",
        image: ReactImg,
        bgColor: "#fff",
      },
      {
        id: 6,
        title: "nextJS",
        image: nextjsImg,
        bgColor: "#fff",
      },
    ],
  },
  {
    title: "Backend / FWs",
    stack: [
      {
        id: 7,
        title: "NodeJS",
        image: nodeImg,
        bgColor: "#fff",
      },
      {
        id: 8,
        title: "expressJS",
        image: expressImg,
        bgColor: "#fff",
      },
    ],
  },
  {
    title: "Monorepos",
    stack: [
      {
        id: 9,
        title: "MongoDB",
        image: mongodbImg,
        bgColor: "#fff",
      },
    ],
  },
];
