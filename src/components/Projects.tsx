// This was a server component, but now we're using hooks, so it has to be client
"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/app/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/app/lib/hooks";
import Reveal from "./motion/Reveal";

export default function Projects() {
	const { ref, inView } = useSectionInView("Projects", 0.2);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<Reveal duration={0.5}>
				<SectionHeading>Projects</SectionHeading>
			</Reveal>
			<div className="">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
