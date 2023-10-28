"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
	return (
		<motion.section
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}>
			{/* <h2 className='text-3xl font-medium capitalize mb-8'>About me</h2> */}
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				Over the past 5 years, I have pursued my passion for <span className="font-medium">filmmaking</span>, both
				creatively and technically involved in the Australian film, TV, and photography industries. My recent curiosity led
				me to pursue a career in web development, currently enrolled in Coder Academy, a{" "}
				<span className="font-medium">full-stack web development</span> bootcamp with a diploma in information technology.
			</p>
			<p className="mb-3">
				My current core stack is <span className="font-medium">React, Next.js, Node.js, Express.js and MongoDB.</span> I am
				also familiar with <span className="font-medium">Python and Flask.</span> I am constantly learning new technologies,
				but I have a strong affinity towards front-end web development.
			</p>
			<p>
				When I'm not at the computer, I'm usually swimming, taking photos with my camera, going on adventures with my
				partner or at home watching movies with our 3 cats. I love Formula 1, so I would be either watching or sim racing.
			</p>
		</motion.section>
	);
}
