// All editable content for IndCoders website
// Update social URLs, contact info, and content here

export const SOCIAL_LINKS = {
  github: "#",
  linkedin: "#",
  discord: "#",
};

export const CONTACT_INFO = {
  email: "indcoders2025@gmail.com",
  phones: ["8218653943", "7037008384"],
};

export const NAV_LINKS = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "What We Do", href: "whatwedo" },
  { label: "Contact", href: "contact" },
];

export const HERO_CONTENT = {
  titleLine1: "Where Developers",
  titleAccent: "Don't Just Learn",
  titleLine2: "They Build.",
  subtitle: "IndCoders is a structured developer community focused on real-world project experience, peer collaboration, and career-ready skill building. No fluff — just code, feedback, and growth.",
};

export const ABOUT_CONTENT = {
  heading: "Built by Developers, for Developers",
  description:
    "IndCoders exists because most learning communities stop at sharing resources. We go further — we put you in teams, assign real projects, and give you the feedback loop you need to actually improve. Think of us as the bridge between 'I know the basics' and 'I can build and ship products.'",
  mission:
    "To provide a structured, hands-on environment where developers at every stage can build real software, receive honest peer reviews, and develop the collaboration skills that top companies look for.",
  vision:
    "To be the go-to developer community in India — known not for how many members we have, but for how many of them actually ship. A place where your GitHub profile speaks louder than your resume.",
  whyWeExist:
    "College curricula lag behind the industry by years. Tutorials teach syntax, not problem-solving. IndCoders fills that gap with real project work, structured mentorship, and a culture where you learn by doing — not by watching.",
};

export const WHY_CHOOSE_FEATURES = [
  {
    title: "Build Products, Not Toy Apps",
    description:
      "Every project here has a scope, a team, and a deadline. You will ship software that solves real problems — the kind of portfolio work that gets you interviews.",
    icon: "Code2",
  },
  {
    title: "A Network That Accelerates You",
    description:
      "Collaborate with developers who push your thinking. Code reviews at midnight, shared debugging sessions, and genuine support — this is how fast growth happens.",
    icon: "Users",
  },
  {
    title: "Beginner-Friendly, No Exceptions",
    description:
      "Never written a line of code? Welcome. First open-source contribution? We will walk you through it. The only prerequisite is the willingness to show up and try.",
    icon: "Heart",
  },
  {
    title: "Industry-Relevant Skills Only",
    description:
      "System design, API architecture, clean code practices, team workflows, and debugging under pressure — the skills hiring managers actually test for.",
    icon: "Target",
  },
  {
    title: "Mentorship from Working Developers",
    description:
      "Our mentors are engineers at real companies. They review your pull requests, help you navigate career decisions, and pair program when you are stuck.",
    icon: "GraduationCap",
  },
  {
    title: "Open Source at the Core",
    description:
      "Every tool we build is open source. Contributing here builds your GitHub credibility and teaches you how production-grade software teams actually operate.",
    icon: "GitBranch",
  },
];

export const PROJECTS_DATA = [
  {
    title: "DevConnect",
    description:
      "Real-time platform for developer pair programming — match with peers, code together on shared editors, and ship features faster as a team.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "CodeReview Hub",
    description:
      "Structured peer code review tool with AI-assisted suggestions. Submit PRs, get feedback from experienced devs, and improve your code quality.",
    techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    github: "#",
    live: null,
  },
  {
    title: "LearnPath",
    description:
      "Community-curated learning roadmaps with progress tracking. Follow paths built by developers who actually mastered the stack, not marketers.",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    title: "IndCoders CLI",
    description:
      "Developer productivity toolkit — scaffold projects from battle-tested templates, access community resources, and manage your learning progress.",
    techStack: ["Node.js", "TypeScript", "CLI"],
    github: "#",
    live: null,
  },
];

export const SERVICES_DATA = [
  {
    title: "Structured Learning Paths",
    description:
      "No random YouTube playlists. Our roadmaps are curated by developers who have mastered these stacks professionally — complete with study groups, checkpoints, and accountability.",
    icon: "BookOpen",
  },
  {
    title: "Real-World Project Experience",
    description:
      "Work on software that ships. Real users, real deadlines, real code reviews. The kind of portfolio work that makes recruiters stop scrolling and start messaging.",
    icon: "Hammer",
  },
  {
    title: "Peer-to-Peer Collaboration",
    description:
      "Pair programming sessions, structured code reviews, weekend hackathons, and architecture discussions. You learn faster surrounded by people who challenge your assumptions.",
    icon: "HandshakeIcon",
  },
  {
    title: "Career Navigation & Mentorship",
    description:
      "Resume teardowns, mock system design interviews, salary negotiation tips, and honest career advice from engineers who have been through the process.",
    icon: "Compass",
  },
];

export const TEAM_DATA = [
  {
    name: "Founder",
    role: "Founder & Community Lead",
    tagline: "Started IndCoders from a hostel room",
    description:
      "Built this community because the gap between tutorials and real-world skills was too wide. Still ships code daily and mentors every new member personally.",
    image: "https://images.unsplash.com/photo-1595017734643-07386d930c6a?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
  },
  {
    name: "Core Member",
    role: "Technical Lead & Contributor",
    tagline: "Full-stack engineer & open source advocate",
    description:
      "Leads project architecture decisions and runs weekly code review sessions. Believes great software is built by teams that communicate well.",
    image: "https://images.unsplash.com/photo-1533142215-a17cdfb95243?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
  },
  {
    name: "You?",
    role: "Open for Contributors",
    tagline: "This spot is built for builders like you",
    description:
      "We are actively looking for developers who want to contribute, mentor, or help shape the community. If you care about developer growth, let's talk.",
    image: "https://images.unsplash.com/photo-1532170579297-281918c8ae72?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
  },
];

export const BUILDING_CONTENT = {
  heading: "Our Roadmap",
  subtitle: "We are building more than a community — we are building a structured path from learner to professional developer.",
  items: [
    {
      phase: "Now",
      title: "Establishing the Core Community",
      description:
        "Active weekly project sprints, structured code reviews, and open technical discussions. A tight-knit group of 50+ developers building and learning together consistently.",
    },
    {
      phase: "Next",
      title: "Open Source Product Suite",
      description:
        "Launching developer tools the community builds and maintains — giving every contributor real open-source experience and a portfolio that proves their skills.",
    },
    {
      phase: "Soon",
      title: "Industry & Startup Partnerships",
      description:
        "Connecting trained community members directly with startups and companies who value developers that can build, collaborate, and ship — not just pass coding tests.",
    },
    {
      phase: "Vision",
      title: "India's Premier Builder Community",
      description:
        "A self-sustaining ecosystem where any developer, regardless of background, can access mentorship, project experience, and career opportunities at every stage of growth.",
    },
  ],
};

export const CTA_CONTENT = {
  heading: "Your Next Level Starts Here",
  subtitle: "Stop learning in isolation. Join a structured community where you build real software, get mentored by working engineers, and grow your career faster than you thought possible.",
  buttonText: "Join IndCoders Now",
};
