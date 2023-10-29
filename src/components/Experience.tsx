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

// The type of the experiencesData object itself
type ExperienceItemType = (typeof experiencesData)[number];

// The type of the experience prop is of ExperienceItemType
type ExperienceProp = {
	experience: ExperienceItemType;
};

function ExperienceItem({ experience }: ExperienceProp) {
	// Since there is an issue with rendering animation react-vertical-timeline
	// Had to use observer API manually for each experience item when in view
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
				}}
				contentArrowStyle={{
					borderRight: "0.4rem solid #9ca3af"
				}}
				date={experience.date}>
				<h3>{experience.title}</h3>
				<p>{experience.location}</p>
				<p>{experience.description}</p>
			</VerticalTimelineElement>
		</div>
	);
}
