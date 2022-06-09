// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/java-script.svg"
import postgresIcon from "./images/postgresql.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import linkedinIcon from "./images/linkdin.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //   Header Details ---------------------
  name: "lindsey",
  headerTagline: [
    //Line 1 For Header
    "full-stack",
    //Line 2 For Header
    "web",
    //Line 3 For Header
    "development",
  ],
  //   Header Paragraph
  headerParagraph:
    "I am a dynamic Full Stack Software Developer based in Raleigh, NC. Experienced coding bootcamp graduate with extensive background in various coding languages, developing mobile applications, and building websites from the ground up. Professional strengths include creative problem-solving, written and verbal communication, and time management. Detail-oriented mindset from 5+ years of experience in the marketing/sales industry.",

  //Contact Email
  contactEmail: "codelikeagirl91@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "milkshakeExpress", //Project Title - Add Your Project Title Here
      para: "Built with Node, Express JWT and MongoDB.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1645749209/milkshakesExpress_flgd84.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/CodeLikeAGirl29/milkshakesExpress",
    },
    {
      title: "BMW Blog", //Project Title - Add Your Project Title Here
      para:
        "An informative blog about the luxury car - BMW. Demonstrating my abilities with HTML/CSS and JavaScript.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1647244306/ScreenShot_Tool_-20220314035130_bq0ywc.png",
      //Project URL - Add Your Project Url Here
      url: "https://codelikeagirl29.github.io/my-blog/",
    },
    {
      title: "City Tours", //Project Title - Add Your Project Title Here
      para:
        "Made to demonstrate my understanding of Reactjs. :) I've created a card-like theme that presents the user with a list of cities and a description of the city. Theres also an Attractions slide that shows user's a list of attractions for each city.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1645750581/ScreenShot_Tool_-20220224195543_fkjmjr.png",
      //Project URL - Add Your Project Url Here
      url: "https://city-tours-seven.vercel.app/",
    },
    {
      title: "Adventure Planner", //Project Title - Add Your Project Title Here
      para:
        "An app using OpenWeatherMap, Hiking Project, and Google Maps API to search nearby hiking trails.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1645749312/ADVENTURE_s0qxhs.png",
      //Project URL - Add Your Project Url Here
      url: "http://adventure-planner.vercel.app/",
    },
    {
      title: "Student Directory", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1645749312/students-pagination_gbwcmc.png",
      //Project URL - Add Your Project Url Here
      url: "https://students-pagination-list.netlify.app/",
    },
    {
      title: "Express Projects", //Project Title - Add Your Project Title Here
      para: "An express, node and pug app displaying my javascript projects.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1647274956/Web_capture_14-3-2022_122213_express-node-pug.herokuapp.com_qp28jf.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://express-node-pug.herokuapp.com/",
    },
    {
      title: "Paws & Claws",
      para:
        "Built a (fictional and serverless) non-profit group representing dog lovers as a local community. Built with express, and nodejs.",
      imageSrc:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1650054974/ScreenShot_Tool_-20220415163525_mjgzjg.png",
      url: "https://github.com/CodeLikeAGirl29/paws-claws-express",
    },
    {
      title: "Image Search",
      para: "An image search tool that implements the Unsplash API into a React app.",
      imageSrc: "https://camo.githubusercontent.com/c1bdefbbf623e80dc49bbddff3f363072d21325cf187017ab40183be0d2bc1ae/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f636f64656c696b65616769726c32392f696d6167652f75706c6f61642f76313635343831343133302f756e73706c61736861706973637265656e73686f745f6e786e326a672e706e67",
      url: "https://xhffdr.csb.app/",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. Collaborative team player with excellent technical abilities offering five years of related experience.",
  aboutParaTwo:
    "As a developer, I enjoy using my obsessive attention to detail, my unequivocal love for creating things, and my mission-driven work ethic to complete my objectives.",
  aboutParaThree:
    "I love being able to help people by simplifying some of life's more complex problems.",
  aboutImage:
    "https://res.cloudinary.com/codelikeagirl29/image/upload/v1649105177/Temp-550x650_waai2v.png",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Can complete end-to-end coding of websites. They direct HTML projects, develop web applications, code sites, and provide support to website users.",
    },
    {
      img: cssIcon,
      para:
        "A professionals whose primary responsibility is to deliver a polished and styled product to the visitor's browser. Practically every website uses CSS, but CSS is often not considered an “equal” in the modern web development stack.",
    },
    {
      img: jsIcon,
      para:
        "Responsible for implementing the front-end logic that defines the behavior of the visual elements of a web application &  connecting this with the services that reside on the back-end.",
    },
    {
      img: reactIcon,
      para:
        "Builds modern-day UI components to improvise application performance. Can leverage their knowledge about JavaScript, HTML, CSS and work closely with testers, designers, web designers, and project managers to create a robust and effective application.",
    },
    {
      img: postgresIcon,
      para:
        "Implement and maintain database code in the form of stored procedures, scripts, queries, views, triggers, etc. Work closely with the CTO to implement effective and maintainable database coding practices that form an architectural foundation. Work with front end developers to define simple yet powerful APIs.",
    },
    {
      img: codeIcon,
      para:
        "Someone who can work on both the back-end and front-end of systems. This means that I can develop fully fledged platforms (with databases, servers and clients) which don't need other applications to function.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "About",
  promotionPara:
    "I pride myself in being thorough and precise in everything I do, and has a keen interest in technology, mobile applications and user experience. As someone who takes responsibility for my own personal development, I am continually evaluating and upgrading my skills so that I stay at the cutting edge of web development. I am a natural problem solver, who has proven myself by successfully completing projects for IT consultancies, software houses, web design agencies, and internship projects. Right now I am looking for a suitable position with a company where outstanding performance is recognised and where I can work on a variety of high profile projects.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/codelikeagirl29" },
    {
      img: codepenIcon,
      url: "https://codepen.io/lindseythedeveloper",
    },
    {
      img: linkedinIcon,
      url: "https://linkedin.com/in/lindsey-howard",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/visionarybylindsey",
    },
  ],

  // End Contact Section ---------------
}
