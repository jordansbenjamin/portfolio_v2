"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/app/lib/data";
import { useInView } from "react-intersection-observer";

export default function Experience() {
	return (
		<section id="experience">
			<SectionHeading>My Experience</SectionHeading>
			<VerticalTimeline>
				{experiencesData.map((experience, index) => (
					<ExperienceItem key={index} experience={experience} />
				))}
			</VerticalTimeline>
		</section>
	);
}

type ExperienceItemType = (typeof experiencesData)[number];

type ExperienceProp = {
	experience: ExperienceItemType;
};

function ExperienceItem({ experience }: ExperienceProp) {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});

	return (
		<div ref={ref} className="vertical-timeline-element">
			<VerticalTimelineElement
				visible={inView}
				contentStyle={{
					background: "#f3f4f6",
					boxShadow: "none",
					border: "1px solid rgba(0,0,0,0.05)",
					textAlign: "left",
					padding: "1.3rem 2rem",
				}}>
				<h3>{experience.title}</h3>
				<p>{experience.location}</p>
				<p>{experience.description}</p>
			</VerticalTimelineElement>
		</div>
	);
}
