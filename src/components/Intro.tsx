"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import toast from "react-hot-toast";
import SocialButton from "./SocialButton";

// const profileImg = "/Me_circle.png";
const profileImg2 = "/me2.png";

export default function Intro() {
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
	const { ref } = useSectionInView("Home", 0.5);

	return (
		<section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-56 scroll-mt-[100rem]">
			{/* Image container */}
			<div className="flex items-center justify-center">
				<div className="relative">
					{/* Div used to wrap image for framer motion, easier this way */}
					<motion.div
						className=""
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "tween", duration: 0.5 }}>
						{/* object-cover preserves the aspect ratio of the img */}
						{/* <Image
							src={profileImg}
							alt="Jordan Profile"
							width={600}
							height={600}
							priority={true}
							// className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
							className="h-48 w-48 rounded-full object-cover shadow-xl"
						/> */}
						{/* <Image
							src={profileImg2}
							alt="Jordan Profile"
							width={600}
							height={600}
							priority={true}
							// className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
							className="h-80 w-80 object-cover mt-[-60px]"
						/> */}
					</motion.div>
					{/* emoji span */}
					{/* <motion.span
						className="absolute bottom-0 right-0 text-5xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}>
						👋🏽
					</motion.span> */}
				</div>
			</div>

			{/* Intro text */}
			{/* <motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				Hello, <span className="font-bold">I'm Jordan.</span> I'm an aspiring{" "}
				<span className="font-bold">full-stack web developer</span> based in <span className="font-bold">Sydney,</span>{" "}
				Australia. My current focus is <span className="underline">React (Next.js).</span>
			</motion.h1> */}
			<motion.h1 
			initial={{opacity: 0, y: 100}}
			animate={{opacity: 1, y: 0}}
			className={`font-gallient text-[10rem] sm:text-[12rem] px-4`}>Hello.</motion.h1>
			<motion.h2 
			initial={{opacity: 0, y: 100}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.15}}
			className={`font-gallient text-3xl sm:text-5xl mb-16 px-4 mt-[-50px]`}>I'm Jordan Benjamin</motion.h2>
			<motion.h3 
			initial={{opacity: 0, y: 100}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.15}}
			className={`font-gallient text-3xl sm:text-5xl mb-14 px-4 mt-[-50px]`}>Junior Dev from Sydney</motion.h3>

			{/* Button container */}
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}>
				{/* Contact me link */}
				{/* <Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection("Contact");
						setTimeOfLastClick(Date.now());
					}}>
					Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link> */}
				{/* Resume link */}
				<a
					href="/Jordan-Benjamin_Resume.pdf"
					download
					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
					onClick={() => {
						toast.success("Resume downloaded!");
					}}>
					Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
				</a>
				{/* LinkedIn link */}
				{/* <a
					href="https://www.linkedin.com/in/jordansb/"
					target="_blank"
					className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60">
					<BsLinkedin />
				</a> */}
				{/* <SocialButton href="https://www.linkedin.com/in/jordansb/">
					<BsLinkedin />
				</SocialButton> */}
				{/* GitHub link */}
				{/* <a
					href="https://github.com/jordansbenjamin"
					target="_blank"
					className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60">
					<FaGithubSquare />
				</a> */}
			</motion.div>
		</section>
	);
}
