"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1,
			}}
            viewport={{
                once: true
            }}>
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-gray-700 -mt-3">
				Please contact me directly at{" "}
				<a href="mailto:jordansbenjamin@gmail.com" className="underline">
					jordansbenjamin@gmail.com
				</a>{" "}
				or through this contact form.
			</p>

			<form action="" className="flex flex-col mt-10">
				<input
					className="h-14 px-4 rounded-lg borderBlack focus:outline-none focus:ring-2 focus:ring-gray-500"
					type="email"
					placeholder="Your email "
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
					name=""
					id=""
					placeholder="Your message"></textarea>
				<button
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all mx-auto focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
					type="submit">
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
				</button>
			</form>
		</motion.section>
	);
}
