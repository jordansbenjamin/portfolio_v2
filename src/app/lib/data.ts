import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// !ANNOYING ERROR, SEE PERSONAL NOTES:
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
const corpcommentImg = "/corpcomment.png";
const rmtdevImg = "/rmtdev.png";
const wordanalyticsImg = "/wordanalytics.png";
const portfoliov2Img = "/portfolio-v2.png";
const kazootImg = "/kazoot.png";
const simpleCalImg = "/simple-cal.png";
const blackjackImg = "/bj.png";
const portfoliov1Img = "/portfolio-v1.png";
const cinematicaImg = "/cinematica.png";

// NOTE: Using 'as const' for const assertions with TS. While the properties are inferred as strings,
// the const assertion will treat each individual item in 'links' as an object with specific properties and values.
// Additionally, these objects, as well as the 'links' array itself, become read-only.

// It's good to use this when data is persitently hardcoded, but not a good idea to
// as const when fetching data from an API or backend for example

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const projectsData = [
	{
		title: "Portfolio v2",
		description:
			"You are currently witnessing the MVP version of this portfolio site, I am still yet to add features such as a chat bot and other design elements.",
		tags: ["React", "Next.js(14)", "TypeScript", "Tailwind", "Framer", "Vercel"],
		imageUrl: portfoliov2Img,
		projectLink: "https://jordansbenjamin.vercel.app/",
	},
	{
		title: "Cinematica API",
		description:
			"Cinematica is a RESTful API developed as my third major project for Coder Academy, developed with Flask and PostgreSQL as the RDBMS.",
		tags: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "Postman", "Bash"],
		imageUrl: cinematicaImg,
		projectLink: "https://github.com/jordansbenjamin/Cinematica_API",
	},
	{
		title: "Simple Cal",
		description:
			"As the name suggests, it's a simple calorie tracker application. Built with React and Bootstrap to practice React patterns.",
		tags: ["React", "JavaScript", "Bootstrap", "Netlify"],
		imageUrl: simpleCalImg,
		projectLink: "https://simple-cal-react.netlify.app/",
	},
	{
		title: "Kazoot",
		description:
			"A quiz app (Kahoot style) built on Python using the Tkinter module, one of my first GUI programs but most importantly used it as a study aid for a discrete maths exam, solved a problem I was having.",
		tags: ["Python", "Tkinter", "Bash", "OOP"],
		imageUrl: kazootImg,
		projectLink: "https://github.com/jordansbenjamin/Kazoot_PyProject",
	},
	{
		title: "Blackjack",
		description:
			"Blackjack terminal game built on Python, my first terminal based program and second major assignment at CoderAcademy. It comes with a full functional menu system and tracks game history with I/O.",
		tags: ["Python", "Bash"],
		imageUrl: blackjackImg,
		projectLink: "https://github.com/jordansbenjamin/Blackjack_terminal-app",
	},
	{
		title: "Portfolio v1",
		description:
			"My first portfolio website built entirely on HTML and SCSS with a tiny touch of JS, and my first website major assignment for CoderAcademy.",
		tags: ["HTML", "SCSS", "JavaScript", "Netlify"],
		imageUrl: portfoliov1Img,
		projectLink: "https://jordansbenjamin.netlify.app/",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"SCSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Redux",
	"Tailwind",
	"Bootstrap",
	"Git",
	"Figma",
	"Framer Motion",
	"Node.js",
	"MongoDB",
	"Express",
	"Python",
	"Flask",
	"REST",
	"PostgreSQL",
	"Schema design",
	"Postman",
	"Bash",
	"Vercel",
	"Netlify",
] as const;

export const experiencesData = [
	{
		title: "Diploma of Information Technology",
		location: "Sydney, Australia",
		description:
			"Currently finishing my studies at Coder Academy, a full-stack web development bootcamp. Interim transcript shows a WAM of 94.64",
		// NOTE: Because the icons itself is a React component and since this is a TS file
		// and not a TSX file, we cant use JSX here, so we need the default React way to
		// add components
		icon: React.createElement(LuGraduationCap),
		date: "2023",
	},
	{
		title: "Photographer's Assistant",
		location: "Sydney, Australia",
		description:
			"Worked mainly in the Australian fashion photography industry, working with premier fashion brands and assisting renowned photographers.",
		icon: React.createElement(CgWorkAlt),
		date: "2021-2023",
	},
	{
		title: "Lighting Technician",
		location: "Sydney, Australia",
		description:
			"Worked as a freelance lighting technician in the commercial space with brands such as Adobe, Virgin Airlines, Taco Bell, Captain Morgan, and Tourism Australia.",
		// icon: React.createElement(FaReact),
		icon: React.createElement(CgWorkAlt),
		date: "2020-2022",
	},
	{
		title: "Camera Assistant",
		location: "Sydney, Australia",
		description:
			"Worked as a freelance camera assistant in diverse projects for platforms such as Netflix and Stan to blockbusters and independent feature films.",
		// icon: React.createElement(FaReact),
		icon: React.createElement(CgWorkAlt),
		date: "2017-2022",
	},
] as const;
