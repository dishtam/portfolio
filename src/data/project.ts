interface Project {
  title: string;
  content: string;
  stack:string[];
}

const projects: Project[] = [
  {
    title: "Project 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, molestias? Consequuntur, numquam laboriosam! Harum molestias sunt consectetur ratione, eligendi sit.",
    stack: ["HTML", "CSS", "JS", "Socket io"],
  },
  {
    title: "Project 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, molestias? Consequuntur, numquam laboriosam! Harum molestias sunt consectetur ratione, eligendi sit.",
    stack: ["HTML", "CSS", "JS", "React JS", "Node Js", "Express"],
  },
  {
    title: "Project 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, molestias? Consequuntur, numquam laboriosam! Harum molestias sunt consectetur ratione, eligendi sit.",
    stack: ["HTML", "CSS", "JS", "React Js", "Node Js", "Express","Mongo DB"],
  },
];

export default projects;
