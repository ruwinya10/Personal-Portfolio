import coffeeBiDashboard from "../assets/coffee_bi_dashboard.png";
import responseTimeAnalysis from "../assets/response_time_analysis.png";
import smartCampusHub from "../assets/smart_campus_hub.png";
import agrolink from "../assets/agrolink.png";
import wellnest from "../assets/wellnest.png";
import halomed from "../assets/halomed.png";
import trendify from "../assets/Trendify.png";
import portfolioImg from "../assets/Portfolio.png";
import HMS from "../assets/HMS.png";
import researchmind from "../assets/researchmind.png";
import prediction from "../assets/prediction.png";
import taskflow from "../assets/taskflow.png";

export const portfolioData = {
  name: "Ruwinya Karunarathna",
  title: "Data Science Undergraduate",
  tagline: "Turning Data into Insights, Ideas into Solutions.",
  email: "ruwinyakarunarathna10@gmail.com",
  location: "Colombo, Sri Lanka",
  linkedin: "https://linkedin.com/in/ruwinya-karunarathna",
  github: "https://github.com/ruwinya-karunarathna",

  about: {
    intro:
      "Currently I'm a 3rd-year undergraduate at Sri Lanka Institute of Technology (SLIIT), pursuing a BSc (Hons) in Information Technology specializing in Data Science.",
    paragraphs: [
      "I am a highly motivated and disciplined learner with a strong passion for Data Science, Machine Learning, Artificial Intelligence, and Software Engineering.",
      "Alongside my studies, I have worked on several academic and personal projects that have helped me strengthen my technical skills and apply theoretical knowledge in practical scenarios. I am particularly interested in how intelligent systems and data-driven approaches can be applied to solve real-world problems and improve decision-making.",
    ],
    highlights: [
      {
        label: "Education",
        value:
          "BSc (Hons) in Information Technology — Data Science\nSLIIT, Malabe",
      },
      {
        label: "Focus",
        value: "Data Science, Machine Learning, Artificial Intelligence, Software Engineering, Business Intelligence",
      },
      { label: "Status", value: "Open to opportunities" },
    ],
  },

  skills: [
    {
      category: "Programming Languages",
      items: ["R", "Python", "Java", "C++", "C", "C#", "SQL","Kotlin", "PHP", "JavaScript"],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Scikit-learn",
        "TensorFlow",
        "Natural Language Processing (NLP)",
        "LLMs",
        "Retrieval-Augmented Generation (RAG)",
        "Multi-Agent Systems",
        "Statistical Modeling",
        "Predictive Analysis",
      ],
    },
    {
      category: "Data Analysis & Visualization",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Exploratory Data Analysis",
        "Data Cleaning & Preprocessing",
        "Inferential Analysis",
        "Data Visualization",
        "Power BI",
        "Tableau",
        "Microsoft Excel",
      ],
    },
    {
      category: "Data Engineering & Big Data",
      items: [
        "ETL (SSIS)",
        "Data Warehousing",
        "SSAS",
        "SSRS",
        "Apache Spark",
        "Apache Hive",
        "Hadoop (HDFS, MapReduce)",
      ],
    },
    {
      category: "Databases & Cloud Platforms",
      items: ["MySQL", "SQL", "NoSQL", "MongoDB", "SQL Server", "Oracle Database", "AWS", "Azure"],
    },
    {
      category: "Web & Mobile Development",
      items: [
        "Spring Boot",
        "MERN Stack",
        "ASP.NET Core",
        "REST APIs",
        "FastAPI",
        "Node.js",
        "Express.js",
        "React.js",
        "Bootstrap",
        "Mobile Application Development",
        "HTML5",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      category: "Tools",
      items: ["VS Code", "Git", "GitHub", "Jupyter Notebook", "Postman", "Visual Studio", "Android Studio"],
    },
    {
      category: "Soft Skills",
      items: [
        "Problem Solving",
        "Teamwork",
        "Communication",
        "Decision Making",
        "Presentation Skills",
        "Adaptability",
      ],
    },
  ],

  projects: [
    {
      title: "ResearchMind - AI Study & Research Assistant",
      description:
        "A multi-agent AI assistant that helps students find academic sources and ask questions about uploaded PDFs. It searches OpenAlex and uses semantic retrieval to find relevant passages in course materials. Specialized agents summarize findings, explain concepts, and check claims against the retrieved evidence.",
      tags: ["LLM", "React", "Python", "FastAPI", "RAG", "NLP", "JWT", "Groq", "OpenAlex", "ChromaDB", "REST APIs", "scikit-learn", "MySQL", "JavaScript", "CSS"],
      image: researchmind,
      githubUrl: "https://github.com/ruwinya10/IT3041-IRWA-2026-Agentic-AI-Based-System",
    },
    {
      title: "Hotel Booking Cancellation Prediction System",
      description:
        "A web app that uses a trained XGBoost model to predict whether a hotel reservation is likely to be canceled. The project compared four classification models using historical booking data before selecting XGBoost. An interactive form collects details such as lead time, deposit type, and past cancellations to support occupancy planning.",
      tags: ["React", "FastAPI", "Python", "JavaScript", "XGBoost", "scikit-learn", "pandas", "NumPy", "REST APIs", "Jupyter Notebook", "Feature Engineering", "EDA", "Data Preprocessing"],
      image: prediction,
      githubUrl: "https://github.com/ruwinya10/Hotel-Cancellation-Prediction",
    },
    {
      title: "Hospital Management System",
      description:
        "A full-stack platform that centralizes patient records, doctor schedules, appointments, lab services, pharmacy inventory, and billing. Staff can track admissions and bed assignments, update medical records, and record payments. Role-based access and audit logs help administrators control access and track system activity.",
      tags: ["React", "Vite", "Java", "Spring Boot", , "MySQL", "Docker", "JWT"],
      image: HMS,
      githubUrl: "https://github.com/ruwinya10/Hospital-Management-System",
    },
    {
      title: "TaskFlow - Task Management Application",
      description:
        "A full-stack Kanban app for assigning tasks and moving them between To Do, Doing, and Done with drag-and-drop. Users can claim unassigned tasks, while administrators can reassign work across users. The app automatically saves status changes to MongoDB so the board stays up to date after a refresh.",
      tags: ["React", "React Router", "Axios", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
      image: taskflow,
      githubUrl: "https://github.com/ruwinya10/TaskFlow-Task-Management-System",
    },
    {
      title: "Data Warehouse & Business Intelligence System",
      description:
        "An end-to-end business intelligence solution designed around a real-world coffee orders dataset. It features structured data warehouse design, automated ETL pipelines, and multidimensional OLAP cubes. Interactive dashboards provide stakeholders with actionable insights into sales trends, customer behavior, and regional product performance.",
      tags: ["ETL","SQL Server", "SSIS", "SSAS", "SQL", "Business Intelligence", "Excel", "Power BI", "Visual Studio"],
      image: coffeeBiDashboard,
      githubUrl: "https://github.com/ruwinya10/Data-Warehousing-and-Business-Intelligence-Project.git",
    },
    {
      title: "Service Timeliness Impact on Customer Confidence: A Statistical & Predictive Analysis",
      description:
        "A comprehensive statistical study evaluating how service response times influence customer satisfaction in hospitality settings. The analysis applies regression modeling, hypothesis testing, and ANOVA to identify key performance drivers, highlighting the relationship between service timeliness, environmental factors, and customer confidence.",
      tags: ["R", "Statistical Modelling", "Data Visualization", "Predictive Analytics", "Data Cleaning"],
      image: responseTimeAnalysis,
      githubUrl: "https://github.com/ruwinya10/Statistical-Modelling-Data-Analysis-Project.git",
    },
    {
      title: "Smart Campus Operations Hub",
      description:
        "A unified platform designed to streamline daily university campus operations. It features conflict-free booking for facilities and assets, automated incident ticketing, real-time user notifications, and secure QR code-based check-ins governed by granular role-based access controls.",
      tags: ["Spring Boot", "MySQL", "Spring Security", "JWT", "OAuth 2.0", "React", "Bootstrap", "REST APIs"],
      image: smartCampusHub,
      githubUrl: "https://github.com/PamodPannigala/-it3030-paf-2026-smart-campus-group_WE_DS_Y3.S1_2.1.git",
    },
    {
      title: "AgroLink – Smart Agricultural Trading & Management System",
      description:
        "A collaborative platform connecting farmers, buyers, agronomists, and logistics drivers in a single trading ecosystem. The system handles agricultural product trading, order tracking, harvest scheduling, delivery & financial tracking, and includes comprehensive administrative monitoring dashboards.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT", "REST APIs"],
      image: agrolink,
      githubUrl: "https://github.com/Mafath/AgroLink-online_v2.git",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A fully responsive personal portfolio website designed and developed to showcase my skills, projects, and academic journey. The platform features a modern UI with smooth navigation, project showcases, and structured sections including About Me, Skills, Certifications, and Contact.",
      tags: ["React", "JavaScript", "HTML", "CSS"],
      image: portfolioImg,
      githubUrl: "https://github.com/ruwinya10/Personal-Portfolio.git",
    },
    {
      title: "WellNest – Daily Habit & Mood Tracker with Hydration Reminders",
      description:
        "A mobile wellness application designed to help users establish and maintain healthy daily routines. It features intuitive habit tracking, mood journaling with emoji input, personalized hydration reminders, and home-screen widgets for quick access and tracking.",
      tags: ["Kotlin", "Android Studio", "SharedPreferences", "XML"],
      image: wellnest,
      objectFit: "cover",
      githubUrl: "https://github.com/ruwinya10/Wellness-Tracker-Android-Mobile-Application.git",
    },
    {
      title: "HaloMed – Online E-Channeling System",
      description:
        "A comprehensive digital healthcare platform designed to streamline patient-doctor interactions. It supports online doctor searches, appointment scheduling, lab test bookings, medical report management, and role-based administration portals alongside secure simulated payment processing.",
      tags: ["HTML", "CSS", "JavaScript", "Java", "MySQL Workbench"],
      image: halomed,
      githubUrl: "https://github.com/ruwinya10/Online-E-Channeling-System.git",
    },
    {
      title: "Trendify – Online Fashion Store & E-Commerce Shopping Platform",
      description:
        "A full-featured e-commerce platform offering a seamless online shopping experience. Key capabilities include interactive product browsing, shopping cart workflows, secure checkout, and comprehensive management dashboards for handling inventory, suppliers, and user roles.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: trendify,
      githubUrl: "https://github.com/ruwinya10/Online-Fashion-Store-Web-Application.git",
    },
  ],

  certifications: [
    {
      title: "Introduction to Web Development",
      issuer: "Online Learning Platform",
      date: "2024",
      credentialUrl: "#",
    },
    {
      title: "JavaScript Essentials",
      issuer: "Online Learning Platform",
      date: "2024",
      credentialUrl: "#",
    },
    {
      title: "Responsive Web Design",
      issuer: "Online Learning Platform",
      date: "2025",
      credentialUrl: "#",
    },
  ],

  navLinks: [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/certifications", label: "Certifications" },
    { path: "/contact", label: "Contact" },
  ],
};
