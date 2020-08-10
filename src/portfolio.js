/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Rub's",
  title: "Hi all, I'm Sam",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python/ Vuejs /and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uw5vs2jBcBQWQq6YcfC1WmOewHasm5Qt/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/barema4",
  linkedin: "https://www.linkedin.com/in/rubarema-sam/",
  gmail: "samrubarema6@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK SOFTWARE ENGINEER",
  skills: [
    emoji(
      "Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("Single page applications and APIs"),
    emoji(
      "Integration of third party services such as Firebase"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "VueJs",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws",
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend(ReactJs/Redux,VueJs/Vuex)", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend(python)",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming(javascript && Python)",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Freelance",
      companylogo: require("./assets/images/freelance.png"),
      date: "May 2020 – Present",
      desc: "Working on commercial and personal projects ",
      descBullets: [
        "Fixing bugs and implementing new features to projects that I am working on",
        "Developing personal projects and leveling up on some  technologies ",
      ],
    },
    {
      role: "Software Engineer",
      company: "Andela",
      companylogo: require("./assets/images/Andela.png"),
      date: "Nov 2018 – May 2020",
      desc:
        "A typical day at Andela involves working on a large codebase, attend sprint planning sessions, reviewing Pull Requests, attend stand-ups, and coaching sessions.",
      descBullets: [
        "Contributed to Andela's open-source project known as Authors Haven backend using python/ Django, which helped developers to share knowledge through writing articles.",
        "Mentored Ladies who were in women in Tech program in front-end development using javascript, React, Html, and CSS",
        "Optimized the performance of the in-house tool(Andelamedia)frontend by doing necessary upgrades and refactoring thecodebase(VueJs/Vuex)",
        "Increased efficiency in booking meeting rooms by integrating google calendar and zoom API with Coverage, a tool for scheduling meetings(React, Redux, and python ).",
        "Increased team efficiency by pair programming which led to the completion of the frontend of Author's Heaven one week before it's actual MVP(React/Redux)",
      ],
    },
    {
      role: "Software Engineer(Frontend)",
      company: "Cowsoko Narobi Kenya",
      companylogo: require("./assets/images/cowsoko.png"),
      date: "Apirl 2018 – Nov 2018",
      desc:
        " An agricluture plaform aiming at tranforming the lives of local dairy farmers into modern dairy farming through educating them and selling high quality breeds of cattle",
      descBullets: [
        "Set up and practiced an agile software development methodology that yielded the MVP of the Dairynomics platform.",
        "Contributed to the development of the frontend of the Dairynomics using Vuejs and Vuex that connected farmers to the modern market",
        "Suggested and implemented the improvements to existing features that increased the system performance",
        "Fixed bugs and refactored the codebase of Cowsoko platform that increased it's availability to users",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "barema4", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};


// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Projects"),
  subtitle:
    "List of projects that I have worked ",

  achivementsCards: [
    {
      title: "Single-Page Application",
      subtitle:
        "Developed a dairy farming management tool that connects local farmers to modern market ",
      image: require("./assets/images/nomics.png"),
      footerLink: [
        {
          name: "Dairynomics",
          url: "https://dairynomics.netlify.app/onboarding",
        },
      ],
    },
    {
      title: "Agriculture platform",
      subtitle:
        "Contributed to the farm management platform that helps farmers in accessing resources about dairyfarming and others ",
      image: require("./assets/images/cowsoko.png"),
      footerLink: [
        {
          name: "Cowsoko",
          url: "https://cowsoko.com/",
        },
      ],
    },
    {
      title: "Developer management tool",
      subtitle:
        "Contributed to the myAndela platform that manages developer profiles and their bio data ",
      image: require("./assets/images/Andela.png"),
      footerLink: [
        {
          name: "MyAndela",
          url: "https://my.andela.com/login",
        },
      ],
    },

    {
      title: "Ecommerce",
      subtitle:
        "Mentored ladies in women in tech programme in developing web applications using html, css javascript and React as framwork",
      image: require("./assets/images/women.png"),
      footerLink: [
        {
          name: "Clothing",
          url: "https://cloth-ug-live.herokuapp.com/",
        },
      ],
    },
  ],
};


const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+256754063403",
  email_address: "samrubarema6@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  // bigProjects,
  achievementSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
};
