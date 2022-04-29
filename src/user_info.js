export const projects = {
  message:
    "asda asdas asdas s sd sa dfgdf wer wer sdsf asdfa sdfdsdf sdfs dfsd fsdf sdf sdfs dfsd fsd fsdf sds",
  list: [
    {
      title: "Time Schedule Design",
      image: require("./common/assets/image/portfolio-1.jpg").default,
      description: "Modern Mobile App Design for time scheduling",
      link: "https://dribbble.com/shots/16006648-Health-App-Designs-and-Layouts/attachments/7846461?mode=media",
    },
    {
      title: "Health Service App Design",
      image: require("./common/assets/image/portfolio-2.jpg").default,
      description: "App Design with many health service features",
      link: "https://dribbble.com/shots/16006648-Health-App-Designs-and-Layouts/attachments/7846461?mode=media",
    },
    {
      title: "Onboarding Design",
      image: require("./common/assets/image/portfolio-3.jpg").default,
      description: "Simplistic Onboarding Design for mobile app",
      link: "https://dribbble.com/shots/16006648-Health-App-Designs-and-Layouts/attachments/7846461?mode=media",
    },
  ],
};

const skills = [
  {
    title: "HTML, CSS and JavaScript",
    image: require("./common/assets/image/html.png").default,
    desc: "asdasd asdasd asdas dssd ds sas das dasda sdasd asd",
    style: "left",
  },
  {
    title: "Angular",
    image: require("./common/assets/image/angular.png").default,
    desc: "asdasd asdasd asdas dssd ds sas das dasda sdasd asd",
    style: "right",
  },
  {
    title: "React Js",
    image: require("./common/assets/image/react.png").default,
    desc: "asdasd asdasd asdas dssd ds sas das dasda sdasd asd asdasd asdasd asdas dssd ds sas das dasda sdasd asd asdasd asdasd asdas dssd ds sas das dasda sdasd asd asdasd asdasd asdas dssd ds sas das dasda sdasd asd asdasd asdasd asdas dssd ds sas das dasda sdasd asd asdasd asdasd asdas dssd ds sas das dasda sdasd asd asdasd asdasd asdas dssd ds sas das dasda sdasd asd",
    style: "left",
  },
];

const userInfo = {
  name: "Rajan Thapa Magar",
  about: {
    profile: {
      src: require("./common/assets/image/about.png").default,
      alt: "My Profile Image",
    },
    logo: {
      name: "Rajan Thapa Magar",
      src: require("./common/assets/image/logo.gif").default,
    },
    message_1:
      "I am an Enthusiastic person with 2 years of industry experience as a UI/UX, Front-end Designer and Developer in company that provide healthcare services, seeking to use proven skills in UI prototyping to enhance user experience at F1-Soft with a good understanding of multiple JavaScript Frameworks. ",
    message_2:
      "I have worked professionally as a Designer and a Developer, My skills profficiency is HTML/CSS, JavaScript, Adobe-XD, Figma, Angular, SASS. I like to think out of box and love to work in flow state where i become one with work and nothing else matters",
    message_3:
      "I believe co-ordination and good team work is a key to success and happy client so, there must be a good culture in a work environment and couple of cheers with beer glasses once in a while as well for a boost up and refreshment",
  },
  intro: {
    profile: {
      src: require("./common/assets/image/my-pic.png").default,
      alt: "My Profile Image",
    },
    skills: ["UI/UX Designer", "Angular Developer", "React Developer"],
    message:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern mobile and web apps.",
  },
  contact: {
    phone: {
      src: require("./common/assets/image/phone.svg").default,
      info: "9863649818",
    },
    email: {
      src: require("./common/assets/image/email.svg").default,
      info: "trazanthapaendl@gmail.com",
    },
    linkedIn: {
      src: require("./common/assets/image/linkedin.svg").default,
      info: "https://www.linkedin.com/in/raj-thapa-001435182/",
    },
  },
  skills,
  projects,
};

export default userInfo;
