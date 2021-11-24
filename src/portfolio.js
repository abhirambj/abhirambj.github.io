const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://abhirambj.me/",
  title: "Abhiram B J.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Abhiram B J",
  role: "Software Engineer",
  description:
    "I studied Computer Science Engineering in Hassan-Karnataka-India, worked at innovative startup and Free Software Organizations. I’m interested in the whole visual part of the web and cross platform mobile applications, its usability, performance and accessibility. I’ve lived on planet earth for 21 years and have worked on the web and cross platform mobile applications for 1 of them.",
  resume:
    "https://drive.google.com/file/d/1BnuvnLsccZKOEA-FeFwoG08JwLL2snRL/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/abhiram-b-j-760439187/",
    github: "https://github.com/abhirambj",
    twitter: "https://twitter.com/EL3CTR9N",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Autoshoppee",
    description:
      "This is an E-Commerce web application developed for a client having requirements in the field of automobiles. This application could let users see the price of automombile parts and other services provided by automobiles in bangalore. Once user chooses the part the notification is sent to the vendor and he would quote a price for that and that amount needed to be paid by the customer and it would be delivered to the customer to the given address.",
    stack: ["NextJS", "Bulma", "FastAPI", "PSQL"],
    // sourceCode: "https://github.com/abhirambj/ptms",
    // livePreview: 'https://github.com',
    company: "Ownacar",
  },
  {
    name: "Autoshoppee Vendor Application",
    description:
      "This cross platform mobile application was built for the vendor where he would get orders of automobile parts and services and he would quote a price for the service or part. This is the vendor part for application built above named Autoshoppee",
    stack: ["Flutter", "FastAPI", "PSQL"],
    // sourceCode: "https://github.com/abhirambj/ptms",
    // livePreview: 'https://github.com',
    company: "Ownacar",
  },
  {
    name: "Freshchoice Web Application",
    description:
      "This is the Admin panel for the freshchoice applications built by our team. This application was built with a minimalistic design and innovative functionalities and some functionalities were generating of a report, adding of orders, deleting and adding categories,etc. Freshchoice outlets are across bangalore and appreciated this project.",
    stack: ["NextJS", "TailwindCSS", "FastAPI", "PSQL"],
    // sourceCode: "https://github.com/abhirambj/ptms",
    // livePreview: 'https://github.com',
    company: "SMMUD",
  },
  {
    name: "Freshchoice Store Manager Application",
    description:
      "This is the application for the store manager where he could maintain all the orders arriving to his store and assign to a delivery boy.",
    stack: ["Ionic", "FastAPI", "PSQL"],
    // sourceCode: "https://github.com/abhirambj/ptms",
    // livePreview: 'https://github.com',
    company: "SMMUD",
  },
  {
    name: "Freshchoice Delivery Boy Application",
    description:
      "This is the application for the delivery boy where he could get orders assigned to him and deliver to the location given and could change the status of a order after its delivered.",
    stack: ["Ionic", "FastAPI", "PSQL"],
    // sourceCode: "https://github.com/abhirambj/ptms",
    // livePreview: 'https://github.com',
    company: "SMMUD",
  },
  {
    name: "Project Team Management System",
    description:
      "This project automates the process of creating teams for a department.This was developed by doing minimalistic designs and good working functionalities. The team would be formed automatically by choosing random person from each group that is charecterised based on their CGPA.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    sourceCode: "https://github.com/abhirambj/ptms",
    // livePreview: 'https://github.com',
    company: "Self",
  },
  {
    name: "Student Website For GECM College",
    description:
      "The website was developed for the sister college of the college I am pursuing my engineering.This was an opportunity for enhancing my skills on web development.",
    stack: ["HTML", "CSS", "JavaScript"],
    // sourceCode: 'https://github.com',
    livePreview: "http://gecm.in",
    company: "Government Engineering College, Mosale Hosahalli",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Data Structures",
  "Algorithms",
  "HTML",
  "CSS",
  "JavaScript",
  "Go Lang",
  "React",
  "Python",
  "TailwindCSS",
  "Material UI",
  "Git",
  "Bulma",
  "NextJS",
  "Flutter",
  "Ionic",
  "Bravo Studio",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "abhiram.bj@gmail.com",
};

export { header, about, projects, skills, contact };
