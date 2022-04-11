export const projects = {
  message: "asda asdas asdas s sd sa dfgdf wer wer sdsf asdfa sdfdsdf sdfs dfsd fsdf sdf sdfs dfsd fsd fsdf sds",
  list: [
    {
      title: "Portfolio 1",
      image: require('./common/assets/image/design.png').default,
      description: "asdasd asdasd asdasd asdasd a sss asda asdas aasdasdas",
      link: "https://dribbble.com/shots/16006648-Health-App-Designs-and-Layouts/attachments/7846461?mode=media",
    },
    {
      title: "Portfolio 2",
      image: require('./common/assets/image/design.png').default,
      description: "asdasd asdasd asdasd asdasd a sss asda asdas aasdasdas",
      link: "https://dribbble.com/shots/16006648-Health-App-Designs-and-Layouts/attachments/7846461?mode=media",
    },
    {
      title: "Portfolio 3",
      image: require('./common/assets/image/design.png').default,
      description: "asdasd asdasd asdasd asdasd a sss asda asdas aasdasdas",
      link: "https://dribbble.com/shots/16006648-Health-App-Designs-and-Layouts/attachments/7846461?mode=media",
    }
  ]
};

const skills = [
  {
    image: "",
    title: "HTML, CSS and JavaScript",
    desc: "asdasd asdasd asdas dssd ds sas das dasda sdasd asd",
    style: "left"
  },
  {
    title: "Angular",
    image: require('./common/assets/image/html.png').default,
    desc: "asdasd asdasd asdas dssd ds sas das dasda sdasd asd",
    style: "right"
  },
  {
    title: "React Js",
    image: require('./common/assets/image/html.png').default,
    desc: "asdasd asdasd asdas dssd ds sas das dasda sdasd asd",
    style: "left"
  }
]


const userInfo = {
  name: "Rajan Thapa Magar",
  about: {
    profile: {
      src: require('./common/assets/image/about.png').default,
      alt: 'My Profile Image'
    },
    message: '<p>Bla bla sadasd asd asd asdasdas asda sdasdas dasdasdas dasdasd asdsdsd sdsd sdddd d d d d d asda asdas asdasd asdasd asdasdas asds as a asdsdasd asdasd </p><br/><p>Bla bla sadasd asd asd asdasdas asda sdasdas dasdasdas dasdasd asdsdsd sdsd sdddd d d d d d asda asdas asdasd asdasd asdasdas asds as a asdsdasd asdasd Bla bla sadasd asd asd asdasdas asda sdasdas dasdasdas dasdasd asdsdsd sdsd sdddd d d d d d asda asdas asdasd asdasd asdasdas asds as a asdsdasd asdasd </p>',
  },
  intro: {
    profile: {
      src: require('./common/assets/image/my-pic.png').default,
      alt: 'My Profile Image'
    },
    skills: [
      'Mobile Application Developer',
      'Android Application Developer',
      'React & Reach Native Developer',
    ],
    message: "I design and develop services for customers of all sizes, specializing in creating stylish, modern mobile and web apps."
  },
  contact: {
    phone: "9845447485",
    email: "example@gmail.com"
  },
  skills,
  projects,

};
export default userInfo;
