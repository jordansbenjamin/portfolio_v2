import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/app/lib/data";
import Image from "next/image";

export default function Projects() {
	return (
		<section>
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

function Project({ title, description, tags, imageUrl }: ProjectProps) {
	return (
		<section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative">
			<div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
				<h3 className="text-2xl font-semibold">{title}</h3>
				<p className="mt-2 leading-relaxed text-gray-700">{description}</p>
				<ul className="flex flex-wrap mt-4 gap-2">
					{tags.map((tag, index) => (
						<li
							className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
							key={index}>
							{tag}
						</li>
					))}
				</ul>
			</div>

			<Image
				src={imageUrl}
				alt="Project I worked on."
				width={650}
				height={650}
				quality={95}
				className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
			/>
		</section>
	);
}


