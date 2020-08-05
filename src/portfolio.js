/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Rub's",
  title: "Hi all, I'm Sam",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python/ Vuejs and some other cool libraries and frameworks."
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
      "Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
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
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
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
      date: "May 2018 – Present",
      desc:
        "Working on commercial and personal projects ",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
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
          "Increased team efficiency by pair programming which led to the completion of the frontend of Author's Heaven one week before it's actual MVP(React/Redux)"
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
          "Fixed bugs and refactored the codebase of Cowsoko platform that increased it's availability to users"

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

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "Projects that I have worked on",
  projects: [
    {
      image: require("./assets/images/dairy.png"),
      link: "https://cowsoko.com/",
    },
    {
      image: require("./assets/images/nomics.png"),
      link: "https://dairynomics.netlify.app/onboarding",
    },
    
    {
      image: require("./assets/images/shop.png"),
      link: "https://cloth-ug-live.herokuapp.com/",
    },
    
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
  
    {
      title: "Single-Page Application Developer",
      subtitle:
        "Developed a dairy farming management tool that connects local farmers to modern market ",
      image: require("./assets/images/nomics.png"),
      footerLink: [
        {
          name: "Dairynomics",
          url:
            "https://dairynomics.netlify.app/onboarding",
        },
      ],
    },

    {
      title: "Mentor",
      subtitle: "Mentored ladies in women in tech programme in developing web applications using html, css javascript and React as framwork",
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

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url:
//         "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
//     },
//   ],
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/",
//     },
//   ],
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
//   ],
// };

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+256754063403",
  email_address: "samrubarema6@gmail.com",
};

//Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
// };
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
};
