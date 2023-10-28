import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/app/lib/data";
import Project from "./Project";

export default function Projects() {
	return (
		<section id="projects" className="scroll-mt-28">
			<SectionHeading>Projects</SectionHeading>
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


