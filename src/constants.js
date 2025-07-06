import cLogo from './assets/techLogo/c.png';
import cppLogo from './assets/techLogo/cpp.png'
import pythonLogo from './assets/techLogo/python.png'
import javascriptLogo from './assets/techLogo/javascript.png'
import htmlLogo from './assets/techLogo/html.png'
import cssLogo from './assets/techLogo/css.png'
import reactjsLogo from './assets/techLogo/reactjs.png'
import tailwindcssLogo from './assets/techLogo/tailwindcss.png'
import bootstrapLogo from './assets/techLogo/bootstrap.png'
import mysqlLogo from './assets/techLogo/mysql.png'
import nodejsLogo from './assets/techLogo/nodejs.png'
import expressjsLogo from './assets/techLogo/express.png'
import gitLogo from './assets/techLogo/git.png'
import githubLogo from './assets/techLogo/github.png'
import vscodeLogo from './assets/techLogo/vscode.png'
import figmaLogo from './assets/techLogo/figma.png'
import arduinoLogo from './assets/techLogo/arduino.png'
import esp32Logo from './assets/techLogo/esp32.png'
import mall from './assets/projectLogo/mall.png'
import csprepLogo from './assets/projectLogo/cs_prep.png'
import movierecLogo from './assets/projectLogo/movie_rec.png'
import kvsLogo from './assets/eduLogo/kvs.jpg'
import tuLogo from './assets/eduLogo/tu.jpg'

export const SkillsInfo =[
    {
        title: 'Languages',
        skills: [
            {name:'C', logo:cLogo},
            {name:'C++', logo:cppLogo},
            {name:'Python', logo:pythonLogo},
            {name:'Javascript', logo:javascriptLogo},
        ]
    },
    {
        title:'Frontend',
        skills: [
            {name:'HTML', logo:htmlLogo},
            {name:'CSS', logo:cssLogo},
            {name:'Javascript', logo:javascriptLogo},
            {name:'React JS', logo:reactjsLogo},
            {name:'Tailwindcss', logo:tailwindcssLogo},
            {name:'Bootstrap', logo:bootstrapLogo},
        ]
    },
    {
        title: 'Backend',
        skills: [
            {name: 'MySQL',logo:mysqlLogo},
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
        ]
    },
    {
        title:'Tools',
        skills: [
            {name: 'Git', logo:gitLogo},
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Figma', logo: figmaLogo },
        ]
    },
    {
        title:'Electronics',
        skills:[
            {name:'Arduino',logo:arduinoLogo},
            {name:'ESP32',logo:esp32Logo},
        ]
    }
]

export const projects = [
    {
        id:0,
        title: "HRA Mall Billing Software",
        description: "A Python-MySQL based billing system with full CRUD operations to manage products, customers, and generate bills. Designed for small retail setups, it ensures smooth inventory handling and efficient billing.",
        image: mall,
        tags:["Python", "MySQL" ]
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
]

export const education = [
    {
        id:0,
        img: kvsLogo,
        school: "Kendriya Vidyalaya Lumding, Assam",
        date: "2020",
        grade: "87.5%",
        desc : "I completed my class 10th education from Kendriya Vidyalaya Lumding , under the CBSE board",
        degree: "CBSE(X)"
    },
    {
        id:1,
        img: kvsLogo,
        school: "Kendriya Vidyalaya Lumding, Assam",
        date: "2022",
        grade: "87%",
        desc : "I completed my class 12th education from Kendriya Vidyalaya Lumding , under the CBSE board",
        degree: "CBSE(XII) - PCM with Computer Science"
    },
    {
        id:2,
        img: tuLogo,
        school: "Tezpur University, Assam",
        date: "2023-2027",
        grade: "8 CGPA",
        desc : "Now I am doing my Bachelor's of Technology(BTech) in Electronics and Communication Engineering from Tezpur University, Assam. And recently I have completed my 4th semester",
        degree: "BTech in ECE"
    },
] 