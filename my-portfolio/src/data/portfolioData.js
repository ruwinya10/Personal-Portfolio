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
import MongoDB_Administrator from "../assets/MongoDB_Administrator.png";
import AWS_Basics from "../assets/AWS_Basics.png";
import Cloud_Computing_Essentials from "../assets/Cloud_Computing_Essentials.png";
import Computing_solutions from "../assets/Computing_solutions.png";
import MongoDB_modelling from "../assets/MongoDB_modelling.png";
import MongoDB_python from "../assets/MongoDB_python.png";
import Networking_Concepts from "../assets/Networking_Concepts.png";
import Python_for_beginners from "../assets/Python_for_beginners.png";
import Python_Programming from "../assets/Python_Programming.png";
import Stage1 from "../assets/Stage1.png";
import Stage2 from "../assets/Stage2.png";

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
      title: "AI/ML Engineer - Stage 1",
      credentialUrl: "https://code.sliit.org/certificates/koedm2thm2",
      issuer: "Sri Lanka Institute of Information Technology (SLIIT)",
      image: Stage1,
      description: "Completed an introductory course in Artificial Intelligence and Machine Learning, covering fundamental concepts, essential prerequisites, and commonly used tools in the field. Gained hands-on exposure through guided projects in computer vision and natural language processing, along with practical experience using modern ML frameworks.",
    },
    {
      title: "AI/ML Engineer - Stage 2",
      credentialUrl: "https://code.sliit.org/certificates/2nvconfidq",
      issuer: "Sri Lanka Institute of Information Technology (SLIIT)",
      image: Stage2,
      description: "Completed a foundational course in supervised machine learning covering key algorithms including regression and classification techniques such as linear and logistic regression, decision trees, random forest, Naïve Bayes, and support vector machines.",
    },
    {
      title: "Python for Beginners",
      credentialUrl: "https://open.uom.lk/verify",
      issuer: "University of Moratuwa",
      image: Python_for_beginners,
      description: "Completed a beginner-level Python programming course covering fundamental programming concepts including variables, control structures, functions, loops, and basic data handling. Gained practical experience in writing simple Python programs and developing problem-solving skills using computational thinking.",
    },
    {
      title: "Python Programming",
      credentialUrl: "https://open.uom.lk/verify",
      issuer: "University of Moratuwa",
      image: Python_Programming,
      description: "Completed training in Python programming, covering data structures, OOP concepts, database connectivity, data visualization, networking with Python, web scraping, API integration, JSON/XML processing, introductory Machine Learning, and Git-based version control with practical programming assessments.",
    },
    {
      title: "AWS SimuLearn Computing Solutions",
      issuer: "Amazon Web Services (AWS)",
      image: Computing_solutions,
      description: "Gained hands-on experience with AWS cloud computing solutions, including Amazon EC2, Amazon S3, Amazon EFS, and Auto Scaling. Developed practical skills in configuring cloud resources, managing storage, deploying compute instances, and implementing scalable and highly available cloud infrastructure.",
    },
    {
      title: "AWS SimuLearn Cloud Computing Essentials",
      issuer: "Amazon Web Services (AWS)",
      image: Cloud_Computing_Essentials,
      description: "Developed a strong foundation in cloud computing concepts, AWS global infrastructure, and core cloud services. Gained knowledge of cloud service models, deployment strategies, security best practices, the AWS Shared Responsibility Model, and fundamental principles of scalability, availability, and cost optimization.",
    },
    {
      title: "AWS SimuLearn Networking Concepts",
      issuer: "Amazon Web Services (AWS)",
      image: Networking_Concepts,
      description: "Gained practical knowledge of AWS networking concepts, including Amazon VPC, public and private subnets, route tables, Internet Gateways, and security groups. Developed skills in configuring secure cloud networks, managing network connectivity, and understanding network isolation and access control within AWS environments.",
    },
    {
      title: "Crash Course: AWS Basics",
      credentialUrl: "https://learn.kodekloud.com/certificate/a0ee5391-1389-4818-9976-f18bb6f99f42",
      issuer: "KOdeKloud",
      image: AWS_Basics,
      description: "Gained hands-on experience with core AWS cloud services, including Amazon S3, EC2, and VPC. Learned cloud fundamentals, secure storage, virtual server deployment, networking concepts, IAM best practices, and AWS Free Tier resource management through practical labs.",
    },
    {
      title: "MongoDB Atlas Administrator Path",
      credentialUrl: "https://learn.mongodb.com/c/C18oeAiIQXiJf584wRSdHw",
      issuer: "MongoDB University",
      image: MongoDB_Administrator,
      description: "Gained hands-on experience in managing MongoDB Atlas clusters, including deployment, configuration, monitoring, backup, and security management. Learned best practices for database administration, performance optimization, and access control in cloud-based NoSQL environments.",
    },
    {
      title: "MongoDB Data Modeling Path",
      credentialUrl: "https://learn.mongodb.com/c/QURg8VJkT-GvqpMKAWCo8Q",
      issuer: "MongoDB University",
      image: MongoDB_modelling,
      description: "Learned MongoDB data modeling principles, including schema design, embedding vs referencing, and building scalable and efficient NoSQL database structures.",
    },
    {
      title: "MongoDB Python Developer Path",
      credentialUrl: "https://learn.mongodb.com/c/MxwCdpZAQKuBNhIkmuvd9w",
      issuer: "MongoDB University",
      image: MongoDB_python,
      description: "Developed core Python programming skills including OOP, data structures, and problem-solving, with experience in building applications and automating tasks.",
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
