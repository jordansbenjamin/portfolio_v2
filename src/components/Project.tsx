"use client";

import React, { useRef } from "react";
import { projectsData } from "@/app/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

// Good practice to name custom types with componentname then props
// custom type ProjectProps can be a type of any number of these objects from projectsData
type ProjectProps = (typeof projectsData)[number];
// The above is more specific than:
// type ProjectProps = {
//     title: string;
//     description: string;
//     tags: string;
//     imageUrl: string;
// }

export default function Project({ title, description, tags, imageUrl, projectLink }: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);

	// We get back info on how far we have scrolled
	const { scrollYProgress } = useScroll({
		// The project cards is the target
		target: ref,
		// When the bottom of the viewport crosses the top of the target
		// thats when the animation should begin
		// The end is specified when the bottom of the viewport is 33% beyond the target
		offset: ["0 1", "1.33 1"],
	});

	// Transform scale y progress
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			className="group mb-3 sm:mb-8 last:mb-0"
			ref={ref}
			style={{ scale: scaleProgress, opacity: opacityProgress }}>
			<a href={projectLink} target="_blank">
				{/* Project container */}
				<section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
					{/* Left content container */}
					<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
						{/* Project title */}
						<h3 className="text-2xl font-semibold">{title}</h3>
						{/* Projetc desc */}
						<p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
						{/* Tech stacks list */}
						<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
							{tags.map((tag, index) => (
								<li
									className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
									key={index}>
									{tag}
								</li>
							))}
						</ul>
					</div>
					{/* Image */}
					<Image
						src={imageUrl}
						alt="Project I worked on."
						width={650}
						height={650}
						quality={95}
						className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:-right-[intial] group-even:-left-40 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
					/>
				</section>
			</a>
		</motion.div>
	);
}
