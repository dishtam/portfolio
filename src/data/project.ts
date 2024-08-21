interface Project {
  title: string;
  content: string;
  stack:string[];
  link: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Food delivery app",
    content:
      "It is an end-to-end food delivery app built using the MERN stack. The project utilizes Cryptjs to securely store passwords, and jwt is used for user authentication. The app includes both login and signup features.",
    stack: ["HTML", "CSS", "JS", "React", "Node JS", "Express"],
    link: "https://github.com/dishtam/GoFood-MERN-APP/",
    url: "https://tinyurl.com/tfh78hd8",
  },
  {
    title: "Camp booking app",
    content:
      "Enables users to book campsite. See available camp site and choose from it. Frontent of the app is built completety using HTML, CSS and JS and EJS.",
    stack: ["HTML", "CSS", "JS", "Node Js", "Express", "Mongo DB"],
    link: "https://github.com/dishtam/YelpCamp/",
    url: "https://tinyurl.com/mvxrtznc",
  },
  {
    title: "Educational game",
    content:
      "Its a QnA based web application which focusses on the interactive side of education. User can choose from a list of questions that are differentiated based on language",
    stack: ["HTML", "CSS", "JS", "React Js", "Node Js", "Express", "Mongo DB"],
    link: "https://github.com/dishtam/EMitrr-Full/",
    url: "https://tinyurl.com/mpzkzx7u",
  },
];

export default projects;
