export const projectsData = [
  {
    id: "resume-roster",
    numId: 1,
    title: "Resume Roster",
    tag: "AI / Full-Stack MERN",
    category: "Full-Stack & AI",
    badge: "Flagship Project",
    desc: "AI-powered resume management and ATS scoring platform leveraging Google Gemini to evaluate resumes, generate scores, and provide actionable career suggestions.",
    fullDesc: "Resume Roster is a full-stack AI-driven career application designed to streamline how candidates prepare resumes. Built with the MERN stack and integrated with the Google Gemini API, the platform provides automated ATS score generation, strength and weakness breakdowns, target-role optimization, and multi-version resume tracking through an interactive analytics dashboard.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "JWT", "Axios"],
    features: [
      "Automated ATS score calculation and scoring breakdown",
      "Google Gemini AI analysis for resume strengths, weaknesses, and keywords",
      "Multi-version resume upload and historical tracking",
      "JWT-secured authentication with protected user routes",
      "Interactive user dashboard with real-time statistics",
      "Target-role based resume optimization recommendations"
    ],
    challenges: "Fine-tuning prompt engineering with the Gemini API to reliably extract structured resume entities and maintaining consistent latency during heavy resume parsing.",
    github: "https://github.com/HAMYL-Aththnayaka/Resume-Roster",
    demo: null,
    hasLiveDemo: false,
    featured: true
  },
  {
    id: "task-management-system",
    numId: 2,
    title: "Task Management System",
    tag: "PERN Full-Stack",
    category: "Full-Stack & AI",
    badge: "Verified Live Demo",
    desc: "Full-stack productivity suite built with PostgreSQL, Express, React, and Node.js featuring secure JWT authentication, multi-criteria filtering, and deadline tracking.",
    fullDesc: "Developed as a technical assessment for full-stack engineering, this application provides an end-to-end task workflow. Users can authenticate, create, update, delete, search, and sort tasks by priority or status with strict deadline validation and an overview dashboard.",
    tech: ["React.js", "PostgreSQL", "Node.js", "Express.js", "JWT", "Axios", "React Toastify", "REST API"],
    features: [
      "Secure JWT authentication and protected routing",
      "Multi-criteria filtering (Status, Priority) and real-time title search",
      "Dynamic sorting (Newest, Oldest, Due Date) with client & server validation",
      "Visual dashboard showing total, pending, in-progress, and overdue task metrics",
      "Responsive UI with loading indicators and toast feedback"
    ],
    challenges: "Designing relational database constraints and handling complex multi-filter SQL queries while keeping backend query execution performant.",
    github: "https://github.com/HAMYL-Aththnayaka/Task-Management-System",
    demo: "https://task-management-system-six-chi.vercel.app",
    hasLiveDemo: true,
    featured: true
  },
  {
    id: "unibites",
    numId: 3,
    title: "UniBites (CanteenApp)",
    tag: "Mobile / Full-Stack",
    category: "Mobile",
    badge: "University System",
    desc: "Cross-platform mobile canteen food ordering platform for university dining, featuring smart menus, cart logic, and an intelligent offline simulation mode.",
    fullDesc: "UniBites is a mobile ordering system built for university dining environments. It allows students to browse live menus, customize orders, manage cart totals, and track order histories. A unique architectural highlight is its intelligent fail-safe simulation layer that ensures reliable UI demonstration even during server disconnection.",
    tech: ["Flutter", "Dart", "Provider", "Dio", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Persistent authentication with JWT token storage",
      "Dynamic menu catalog with synchronized cart subtotal calculation",
      "Order history tracking and status inspection",
      "Intelligent fail-safe mode with local simulation layer for seamless offline demos",
      "Multi-platform base URL mapping (Windows desktop vs Android emulator)"
    ],
    challenges: "Handling network edge cases and routing differences between local Android emulators and desktop builds, solved through custom Dio interceptors and a dynamic base URL resolver.",
    github: "https://github.com/HAMYL-Aththnayaka/CanteenApp",
    demo: null,
    hasLiveDemo: false,
    featured: true
  },
  {
    id: "yazz-player",
    numId: 4,
    title: "Yazz Player",
    tag: "Flutter Mobile Audio",
    category: "Mobile",
    badge: "Audio Engineering",
    desc: "Cross-platform Flutter music player with background playback service, system notification bar controls, local storage audio scanning, and custom playlists.",
    fullDesc: "A sleek, native-feel audio player crafted with Flutter and Dart. It features local filesystem scanning using OnAudioQuery, system notification bar media controls, background playlist management with just_audio and audio_service, and dynamic glassmorphic player views.",
    tech: ["Flutter", "Dart", "just_audio", "audio_service", "OnAudioQuery", "Provider"],
    features: [
      "Full audio playback (play, pause, skip, seek, shuffle)",
      "Background playback service and system notification tray controls",
      "Automatic local storage scanning for audio files",
      "Custom playlist creation and track library organization",
      "Fluid animated player UI with real-time progress sliders"
    ],
    challenges: "Managing asynchronous audio streams and syncing Flutter UI state across background playback and OS lock-screen notifications.",
    github: "https://github.com/HAMYL-Aththnayaka/yazz_player_app_",
    demo: null,
    hasLiveDemo: false,
    featured: true
  },
  {
    id: "yazz-video-chat",
    numId: 5,
    title: "Yazz Video Chat",
    tag: "WebRTC & Real-Time",
    category: "Real-Time & Systems",
    badge: "Real-Time WebRTC",
    desc: "Low-latency video conferencing platform built with React, TypeScript, and Agora SDKs featuring live audio/video, chat messaging, and synchronized real-time audience polls.",
    fullDesc: "A multi-user real-time conferencing web application built with React, TypeScript, and Agora RTC/RTM SDKs. In addition to high-fidelity audio/video streams and screen sharing, it includes a real-time polling engine where hosts broadcast questions and receive synchronized attendee votes across distributed channels.",
    tech: ["React", "TypeScript", "Agora RTC SDK", "Agora RTM SDK", "Context API", "Tailwind CSS"],
    features: [
      "Low-latency multi-user video and audio conferencing",
      "Real-time synchronized messaging via Agora RTM",
      "Interactive live polls with instant vote synchronization",
      "Screen sharing and host participant moderation",
      "Queue-based event processing to maintain state synchronization under network fluctuations"
    ],
    challenges: "Overcoming state desynchronization in real-time polls during rapid voting by refactoring to a queue-based RTM event handler.",
    github: "https://github.com/HAMYL-Aththnayaka/Yazz_Video_Chat",
    demo: null,
    hasLiveDemo: false,
    featured: true
  },
  {
    id: "yzz-trac",
    numId: 6,
    title: "Yzz Trac",
    tag: "React + FastAPI",
    category: "Full-Stack & AI",
    badge: "FastAPI Backend",
    desc: "Modern inventory management system connecting a responsive React frontend with a high-performance asynchronous Python FastAPI backend and OpenAPI docs.",
    fullDesc: "A full-stack product and stock management application designed to showcase high-throughput REST APIs using Python FastAPI and modern component-driven React. Includes complete product CRUD operations, search, sort, and automated OpenAPI documentation via Swagger UI.",
    tech: ["React", "FastAPI", "Python", "Pydantic", "Uvicorn", "Axios"],
    features: [
      "Asynchronous high-performance REST endpoints with FastAPI",
      "Strict request validation and data modeling with Pydantic",
      "Interactive API documentation with Swagger UI and ReDoc",
      "Product inventory dashboard with add, edit, delete, and sort",
      "Real-time search and responsive UI"
    ],
    challenges: "Integrating asynchronous Python backend endpoints with React Axios state updates while preserving smooth UI loading states.",
    github: "https://github.com/HAMYL-Aththnayaka/yzz-Trac",
    demo: null,
    hasLiveDemo: false,
    featured: true
  },
  {
    id: "retro-games-suite",
    numId: 7,
    title: "Classic Web Games Suite",
    tag: "Interactive Web / JavaScript",
    category: "Interactive Web",
    badge: "3 Live Demos",
    desc: "Suite of responsive browser games (Connect-4, Whack-A-Mole, Duck Hunt) built with vanilla JavaScript, collision detection, and zero external dependencies.",
    fullDesc: "A showcase of fundamental frontend game mechanics, DOM manipulation, state-driven animations, score counters, and event listeners. Every game in the suite is deployed live on Vercel with responsive controls for desktop and touch screens.",
    tech: ["Vanilla JavaScript", "HTML5 Canvas/DOM", "CSS3", "Vercel"],
    features: [
      "Connect-4: Turn-based 2-player drop logic and diagonal/horizontal win detection",
      "Whack-a-Mole: Dynamic countdown timer, randomized mole spawn intervals, and score persistence",
      "Duck Hunt: Animated target trajectory simulation and click-accuracy tracking",
      "Instant playability directly in browser with zero dependencies"
    ],
    challenges: "Structuring predictable game loops and DOM re-renders without heavy external gaming frameworks.",
    github: "https://github.com/HAMYL-Aththnayaka/Connect-4",
    demo: "https://connect-4-blond.vercel.app",
    hasLiveDemo: true,
    otherDemos: [
      { title: "Connect-4", url: "https://connect-4-blond.vercel.app", repo: "https://github.com/HAMYL-Aththnayaka/Connect-4" },
      { title: "Whack-A-Mole", url: "https://whack-a-mole-wine.vercel.app", repo: "https://github.com/HAMYL-Aththnayaka/whack-a-mole" },
      { title: "Duck Hunt", url: "https://duck-hunt-coral.vercel.app", repo: "https://github.com/HAMYL-Aththnayaka/Duck-Hunt" }
    ],
    featured: true
  },
  {
    id: "faculty-evaluation-system",
    numId: 8,
    title: "Faculty Performance Evaluation",
    tag: "Academic System",
    category: "Full-Stack & AI",
    badge: "Academic Project",
    desc: "Web-based evaluation platform created for the University of Vavuniya to streamline faculty reviews, student feedback, role-based authorization, and reporting.",
    fullDesc: "Built for the University of Vavuniya Faculty of Applied Science, this platform enables student evaluators to assess lecturers across teaching, research, and communication criteria with word limits and input validation. Administrators can view analytical report summaries, manage announcements, and moderate users.",
    tech: ["PHP", "MongoDB", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Role-based authentication & authorization (Evaluators vs Administrators)",
      "Multi-criteria evaluation forms (teaching, research, service, communication)",
      "Admin dashboard with aggregate evaluation statistics and feedback reports",
      "Sanitized inputs and password hashing for campus security"
    ],
    challenges: "Integrating MongoDB NoSQL database drivers with PHP server-side scripting to store flexible feedback schemas.",
    github: "https://github.com/HAMYL-Aththnayaka/Faculty-Performance-Evaluation-System",
    demo: null,
    hasLiveDemo: false,
    featured: false
  },
  {
    id: "the-fruit-store",
    numId: 9,
    title: "The Fruit Store",
    tag: "Frontend E-Commerce",
    category: "Interactive Web",
    badge: "UI / UX Design",
    desc: "Vibrant and responsive e-commerce storefront showcasing organic produce with modern Tailwind CSS layouts and Framer Motion micro-interactions.",
    fullDesc: "An exploratory e-commerce frontend focused on modern UI aesthetics, dynamic produce catalog layouts, mobile responsiveness, and fluid interaction animations using Framer Motion.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "Dynamic fruit display cards and menu showcase",
      "Framer Motion entrance animations and scroll transitions",
      "Mobile-first responsive grid layouts",
      "Interactive cart & item preview interface"
    ],
    challenges: "Optimizing animation frame rates and Tailwind styling across varying viewport sizes.",
    github: "https://github.com/HAMYL-Aththnayaka/The-Fruit-Store",
    demo: null,
    hasLiveDemo: false,
    featured: false
  }
];

export const projectCategories = [
  "All",
  "Full-Stack & AI",
  "Mobile",
  "Real-Time & Systems",
  "Interactive Web"
];
