"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/app/lib/data";
import { useSectionInView } from "@/app/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const { ref } = useSectionInView("Skills");

	return (
		// max-w-[53rem] restricts the max width of the section
		// scroll-mt-28 adds space to top when scrolling into section
		<section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
			<SectionHeading>My Skills</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
