export const projects = {
  message: "asda asdas asdas s sd sa dfgdf wer wer sdsf asdfa sdfdsdf sdfs dfsd fsdf sdf sdfs dfsd fsd fsdf sds",
  list: [
    {
      id: 1,
      img: "/img/design.png",
      link: "https://dribbble.com/shots/16006648-Health-App-Designs-and-Layouts/attachments/7846461?mode=media",
    },
    {
      id: 2,
      img: "/img/design.png",
      link: "https://dribbble.com/shots/16006648-Health-App-Designs-and-Layouts/attachments/7846461?mode=media",
    },
    {
      id: 3,
      img: "/img/design.png",
      link: "https://dribbble.com/shots/16006648-Health-App-Designs-and-Layouts/attachments/7846461?mode=media",
    }
  ]
};

const skills = [
  {
    id: 1,
    img: "",
    title: "HTML, CSS and JavaScript",
    desc: "asdasd asdasd asdas dssd ds sas das dasda sdasd asd",
    style: "left"
  },
  {
    id: 2,
    img: "",
    title: "Angular",
    desc: "asdasd asdasd asdas dssd ds sas das dasda sdasd asd",
    style: "right"
  },
  {
    id: 3,
    img: "",
    title: "React Js",
    desc: "asdasd asdasd asdas dssd ds sas das dasda sdasd asd",
    style: "left"
  }
]


const userInfo = {
  name: "Madhusudan Sapkota",
  about: {
    profile: require('./img/about.png').default,
    message: '<p>Bla bla sadasd asd asd asdasdas asda sdasdas dasdasdas dasdasd asdsdsd sdsd sdddd d d d d d asda asdas asdasd asdasd asdasdas asds as a asdsdasd asdasd </p><br/><p>Bla bla sadasd asd asd asdasdas asda sdasdas dasdasdas dasdasd asdsdsd sdsd sdddd d d d d d asda asdas asdasd asdasd asdasdas asds as a asdsdasd asdasd Bla bla sadasd asd asd asdasdas asda sdasdas dasdasdas dasdasd asdsdsd sdsd sdddd d d d d d asda asdas asdasd asdasd asdasdas asds as a asdsdasd asdasd </p>',
  },
  intro: {
    profile: require('./img/my-pic.png').default,
    skills: [
      'Mobile Application Developer',
      'Android Application Developer',
      'React & Reach Native Developer',
    ],
    message: "I design and develop services for customers of all sizes, specializing in creating stylish, modern mobile and web apps."
  },
  contact: {
    phone: "9845447485",
    email: "sapkotamadhusudan99@gmail.com"
  },
  skills,
  projects,

};
export default userInfo;
