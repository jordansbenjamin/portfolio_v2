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

// NOTE: Using 'as const' for const assertions with TS. While the properties are inferred as strings,
// the const assertion will treat each individual item in 'links' as an object with specific properties and values.
// Additionally, these objects, as well as the 'links' array itself, become read-only.

// It's good to use this when data is persitently hardcoded, but not a good idea to
// as const when fetching data from an API or backend for exampke


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
		title: "Project 1",
		description: "Some description about this project, a short summary. More description to describe the project, it is a full-stack project.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "Project 2",
		description: "Some description about this project, a short summary. More description to describe the project, it is a full-stack project.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Project 3",
		description: "Some description about this project, a short summary. More description to describe the project, it is a full-stack project.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const experiencesData = [
	{
		title: "Diploma of Information Technology",
		location: "Sydney, Australia",
		description: "Currently finishing my studies at Coder Academy, a full-stack web development bootcamp.",
		icon: React.createElement(LuGraduationCap),
		date: 2023,
	},
	{
		title: "Photographer's Assistant",
		location: "Sydney, Australia",
		description:
			"Worked mainly in the Australian fashion photography industry, working with premier fashion brands and renowned photographers.",
		icon: React.createElement(CgWorkAlt),
		date: 2023,
	},
	{
		title: "Camera Assistant",
		location: "Sydney, Australia",
		description:
			"Worked as a freelance camera & lighting technician in diverse projects for platforms such as Netflix and Stan and brands such as Adobe, Virgin Airlines, and Tourism Australia.",
		icon: React.createElement(FaReact),
		date: 2023,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"GraphQL",
	"Apollo",
	"Express",
	"PostgreSQL",
	"Python",
	"Django",
	"Framer Motion",
] as const;
