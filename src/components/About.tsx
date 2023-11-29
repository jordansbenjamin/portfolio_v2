"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import useDetectScroll from "@smakss/react-scroll-direction";

export default function About() {
	const { ref, inView } = useSectionInView("About");
	const scrollDir = useDetectScroll();

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		}
	}, [inView]);

	return (
		<motion.section
			ref={ref}
			// scroll-mt-28 is required to add space above the section when routing to it
			className="mb-28 max-w-[45rem] text-center sm:text-[1.06rem] leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
			transition={{ delay: 0.8, duration: 0.8 }}
			// viewport={{ once: true }}
			id="about">
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
				When I'm not at the computer, I'm usually discovering new recipes to cook or places to eat, I am a certified foodie.
				Otherwise, I love sports, racing and football is lovely combination. Oh and I'm a huge film buff, so ask me anything
				about movies or tv shows.
			</p>
		</motion.section>
	);
}
