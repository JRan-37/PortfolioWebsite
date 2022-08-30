// Website related settings
const settings = {
  isSplash: false, 
  useCustomCursor: false, 
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Good Evening",
  title2: "Jon",
  logo_name: "🔥",
  nickname: "Jon",
  full_name: "Jonathan Randolph",
  subTitle:
    "Java Full Stack Developer, Unity Game Developer. Every problem has a solution once you solve the given puzzle before you.",
  resumeLink:
    "https://docs.google.com/document/d/1EUDZCd9bd6H5ylbnuenhZRIrkJ5-VySH1-qbaYiMGEM/edit?usp=sharing",
  mail: "mailto:jran2400@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/JRan-37",
  linkedin: "https://www.linkedin.com/in/jonathan-randolph-184729166/",
  gmail: "jran2400@gmail.com",
  portfolium: "https://portfolium.com/JonathanRandolph",
};

const skills = {
  data: [
    {
      title: "Java Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Developing interactive front end / UI for web and mobile applications",
        "Building responsive websites using ReactJS",
        "Developing mobile applications using Java and Android Studio",
        "Creating application backends in Java using Spring Boot and Hibernate",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        /*{
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },*/
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        /*{
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },*/
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        /*{
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },*/
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        /*{
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },*/
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        /*{
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },*/
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    /*{
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "Experience working on multiple cloud platforms",
        "Experience hosting and managing websites",
        "Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },*/
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Pittsburgh",
      subtitle: "Bachelor of Computer Science",
      logo_path: "University_of_Pittsburgh_seal.svg",
      alt_name: "PITT",
      duration: "2016 - 2019",
      descriptions: [
        "Studied core subjects such as Data Structures, System Architecture, Networking, etc.",
        "Course programming languages primarily included: Java, C++, C#, Python and Ada.",
      ],
      website_link: "https://www.pitt.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "MongoDB Certification",
      subtitle: "In Progress",
      logo_path: "mongo.png",
      certificate_link:
        "https://www.mongodb.com/",
      alt_name: "MongoDB University",
      color_code: "#47A048",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Activities",
  description:
    "Currently working for GenSpark and actively seeking new opportunities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Java Full Stack Developer",
          company: "GenSpark",
          company_url: "https://genspark.net/",
          logo_path: "genspark-squareLogo.png",
          duration: "May 2022 - Current",
          location: "Remote Work",
          description:
          `Completed assignments using Core Java fundamentals - Loops, Arrays, Collections, Classes, OOP, Exceptions, IO Files, Functional Programming
          Built several individual projects such as Humans vs Goblins using Java and applying Java concepts.
          
          Created the backend of an application with Java, Spring Boot, and using Hibernate to link a MySQL database.
          
          Studied the fundamentals of React development including components, properties, events, and fetching data from a Spring Boot API backend.
          
          Built a restaurant website, user login system,  payment logging and rewards system using Java, Spring Boot, Hibernate, MySQL, and React.
          
          Completed an AWS Module to learn the fundamentals of Cloud Computing, Foundational and Compute Services, Storage and Content Delivery, Security, and AWS Management.
          
          Built personal profile with React.`,
          color: "#ee3c26",
        },
        {
          title: "CEO/Lead Developer",
          company: "Supremacy Links Software LLC",
          company_url: "https://www.bizapedia.com/pa/supremacy-links-software-llc.html",
          logo_path: "SSLLogo.png",
          duration: "June 2021 - Current",
          location: "Philadelphia, PA",
          description:
          `Developed 2D and 3D game frameworks within the Unity engine in C#.
          Established a quick and efficient workflow between the development team and graphic design teams to properly create and implement assets within the Unity engine.
          Created and organized all business documents, expense reports, work contracts and project asset files.
          Responsible for overseeing the development and implementation of new application features.
          Responsible for ensuring optimization and compatibility for older and less powerful hardware.
          `,
          color: "#0071C5",
        },
        {
          title: "IT Lead/Web Developer",
          company: "CIP-PL",
          company_url: "https://cipplguinea.com/",
          logo_path: "CIPPL.png",
          duration: "Apr 2020 - Nov 2021",
          location: "Work From Home",
          description:
          `Checked computer hardware (HDD, mouse, keyboards etc.) to ensure functionality.
          Developed and maintained local networks in ways that optimize performance.
          Identified computer or network equipment shortages and placed orders.
          Created and edited, all print-production needs for product cards & labels, sales collateral, banners, sales presentations, catalogs, packaging, mockup, etc. while following all brand guidelines.
          Developed and deployed a user-friendly company website that allows visitors to quickly submit information and request quotes.
          Trained staff members on internal web functions, including steps on performing routine maintenance, updates and minor website changes.
          `,
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Activities & Honors",
      experiences: [
        {
          title: "Club Member",
          company: "Pitt ACM",
          company_url: "https://www.meetup.com/ACM-Pittsburgh/",
          logo_path: "University_of_Pittsburgh_seal.svg",
          duration: "Sep 2016 - Present",
          location: "Pittsburgh, PA",
          description:
          "Non-profit professional group that meets regularly to discuss diverse topics in computer science.",
          color: "#040f26",
        },
        {
          title: "Voter Registration Volunteer",
          company: " Nextgen America",
          company_url: "https://nextgenamerica.org/",
          logo_path: "nextgen-logo.svg",
          duration: "Nov 2016 - Dec 2016",
          location: "Philadelphia, PA",
          description: "Helped voters in the booths during the presidential elections of 2016.",
          color: "#196acf",
        },
        {
          title: "Community Center Volunteer",
          company: "Plum Community Center",
          company_url: "https://www.plumcommunitycenter.com/",
          logo_path: "At-PCC-Logo.svg",
          duration: "June 2014 - Aug 2014",
          location: "Plum, PA",
          description:
            "Landscaping, Cooking, Cleaning, assisting with programs and events",
          color: "#4285F4",
        },      
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jrprofile.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "LinkedIn",
    subtitle:
      "The best place to reach out to me professionally is on LinkedIn. All business correspondence is frequently monitored and replies will be sent as soon as possible.",
    link: "https://www.linkedin.com/in/jonathan-randolph-184729166/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "HumansVsGoblinsGUI",
      url: "https://github.com/JRan-37/HumansVsGoblinsGUI",
      description: "Humans vs Goblins game written in Java using JavaFX for the GUI.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "1",
      name: "RESTful API Example",
      url: "https://github.com/JRan-37/RESTAPI",
      description:
        "A program implementing 3 different methods of RESTful API.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "XML",
          iconifyClass: "vscode-icons:file-type-xml",
        },
      ],
    },
    {
      id: "2",
      name: "Restaurant Website",
      url: "https://github.com/JRan-37/RestaurantWeb",
      description:
        "A website built with React with a backend database implemented using MySQL, Java, Spring Boot and Hibernate.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "XML",
          iconifyClass: "vscode-icons:file-type-xml",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "MySQL",
          iconifyClass: "simple-icons:mysql",
        },
      ],
    },
    /*
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Python Selenium",
          iconifyClass: "logos-selenium",
        },
        {
          name: "Chromium Browser",
          iconifyClass: "openmoji-chromium",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
    */
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
