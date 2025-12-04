import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "besty",
    category: "Language Learning",
    title: "Besty - German B1 Exam Prep",
    src: "/assets/projects-screenshots/besty/besty-cover.png",
    screenshots: ["besty-cover.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.openai],
    },
    live: "https://b1besty.vercel.app/",
    github: "https://github.com/Raphaelavazq/Besty",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Master German B1 with AI-Powered Practice
          </TypographyP>
          <TypographyP className="font-mono ">
            Besty is a comprehensive German language learning application with
            460 practice questions, AI-powered writing corrections,
            speech-to-text functionality, and an exam simulator. Built while
            actively learning German B1, giving authentic insight into learner
            needs.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • 460 comprehensive B1 exam questions
            <br />
            • User authentication and progress tracking
            <br />
            • AI-powered writing corrections with OpenAI
            <br />
            • Speech-to-text functionality for pronunciation practice
            <br />
            • Full exam simulator
            <br />
            • Mobile-first responsive design
            <br />• Real-time analytics dashboard
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Fully deployed production application helping German language
            learners prepare for official B1 certification exams. Demonstrates
            ability to identify market needs and execute complete full-stack
            solutions with AI integration.
          </p>
        </div>
      );
    },
  },
  {
    id: "medtime",
    category: "Healthcare Platform",
    title: "MedTime - Healthcare Connection",
    src: "/assets/projects-screenshots/medtime/medtime-cover.png",
    screenshots: ["medtime-cover.png"],
    live: "https://med-time-weld.vercel.app/",
    github:
      "https://github.com/Raphaelavazq/MedTime-UX_UI-engineering-course_Final-Project",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.openai],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Connecting Parents with Healthcare Professionals
          </TypographyP>
          <TypographyP className="font-mono ">
            MedTime is a comprehensive healthcare platform connecting parents
            with doctors, featuring doctor search with location mapping,
            appointment scheduling, AI-powered health information, and
            parent-doctor communication system. Exceeded course expectations by
            implementing full backend despite frontend-only curriculum.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Google Maps API integration for doctor search
            <br />
            • Real-time appointment scheduling system
            <br />
            • OpenAI API for health information assistance
            <br />
            • User research-driven design
            <br />
            • Custom-built backend API
            <br />
            • Responsive, user-centered interface
            <br />• Complex state management with React Context
          </p>
          <TypographyH3 className="my-4 mt-8">Development Process</TypographyH3>
          <p className="font-mono mb-2">
            Built through extensive user research, problem validation,
            wireframing, prototyping, and full-stack implementation. The project
            demonstrates ability to go beyond requirements and solve real
            healthcare communication challenges.
          </p>
        </div>
      );
    },
  },
  {
    id: "mariamacrame",
    category: "E-commerce",
    title: "Maria Macramé - E-commerce Platform",
    src: "/assets/projects-screenshots/mariamacrame/maria-cover.png",
    screenshots: ["maria-cover.png"],
    live: "https://raphaelavazq.github.io/e-commerce-React-final-project/",
    github: "https://github.com/Raphaelavazq/e-commerce-React-final-project",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Complete E-commerce Solution for Handmade Products
          </TypographyP>
          <TypographyP className="font-mono ">
            Maria Macramé is a full-featured e-commerce platform for handmade
            macramé products and plants, featuring product catalog with
            filtering, shopping cart functionality, user authentication with
            Google Sign-In, and a modern, responsive design.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Complete product catalog with category filtering
            <br />
            • Full shopping cart implementation
            <br />
            • Firebase Authentication (Google Sign-In)
            <br />
            • Checkout process flow
            <br />
            • User profile management
            <br />
            • Responsive, mobile-first design
            <br />
            • Context API for state management
            <br />• React Router for navigation
          </p>
          <TypographyH3 className="my-4 mt-8">
            Technical Implementation
          </TypographyH3>
          <p className="font-mono mb-2">
            Demonstrates e-commerce architecture patterns, Firebase integration
            for authentication and data storage, complex state management across
            cart and user sessions, and complete payment flow design.
          </p>
        </div>
      );
    },
  },
  {
    id: "globalsphere",
    category: "Event Management",
    title: "Global Sphere Event Hub",
    src: "/assets/projects-screenshots/globalsphere/globalsphere-cover.png",
    screenshots: ["globalsphere-cover.png"],
    live: "https://raphaelavazq.github.io/globalSphere/",
    github: "https://github.com/Raphaelavazq/globalSphere",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Event Discovery Platform Built with Core Web Technologies
          </TypographyP>
          <TypographyP className="font-mono ">
            Global Sphere is an event management and discovery platform
            showcasing mastery of vanilla JavaScript, HTML5, and CSS3. Built
            without frameworks, demonstrating strong fundamentals in core web
            technologies and responsive design.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Event listing and discovery interface
            <br />
            • Fully responsive layout (mobile, tablet, desktop)
            <br />
            • Clean, modern design aesthetic
            <br />
            • Vanilla JavaScript implementation (no frameworks)
            <br />
            • SCSS for advanced styling
            <br />
            • Semantic HTML5 structure
            <br />• Cross-browser compatibility
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Skills</TypographyH3>
          <p className="font-mono mb-2">
            Demonstrates proficiency in core web development fundamentals, CSS
            preprocessors (SCSS), DOM manipulation, responsive design
            principles, and clean code architecture without framework
            dependencies.
          </p>
        </div>
      );
    },
  },
  {
    id: "dupp",
    category: "E-commerce",
    title: "Düpp - Online Shop Platform",
    src: "/assets/projects-screenshots/dupp/dupp-cover.png",
    screenshots: ["dupp-cover.png"],
    live: "https://dupp-shop.vercel.app/",
    github: "https://github.com/Raphaelavazq/d-pp",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Modern E-commerce Shop Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            Düpp is a modern online shop platform featuring a clean, minimalist
            design with full e-commerce functionality. Built with Next.js for
            optimal performance and user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Modern, minimalist UI/UX design
            <br />
            • Product catalog and filtering
            <br />
            • Shopping cart functionality
            <br />
            • Firebase backend integration
            <br />
            • Responsive design for all devices
            <br />
            • Next.js for server-side rendering
            <br />• Tailwind CSS for styling
          </p>
          <TypographyH3 className="my-4 mt-8">
            Technical Implementation
          </TypographyH3>
          <p className="font-mono mb-2">
            Built with Next.js and React for a fast, modern web experience.
            Firebase handles authentication and data storage, while Tailwind CSS
            provides a sleek, responsive interface.
          </p>
        </div>
      );
    },
  },
];
export default projects;
//   screenshots: ["1.png", "2.png", "3.png", "4.png"],
