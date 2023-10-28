"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const profileImg = "/Me_circle.png";

export default function Intro() {
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0">
			<div className="flex items-center justify-center">
				<div className="relative">
					{/* Div used to wrap image for framer motion, easier this way */}
					<motion.div
						className=""
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "tween", duration: 0.5 }}>
						{/* object-cover preserves the aspect ratio of the img */}
						<Image
							src={profileImg}
							alt="Jordan Profile"
							width={100}
							height={100}
							priority={true}
							className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>
					{/* emoji span */}
					<motion.span
						className="absolute bottom-0 right-0 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}>
						👋🏽
					</motion.span>
				</div>
			</div>

			<motion.p
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				<span className="font-bold">Hello, I'm Jordan.</span> I'm a{" "}
				<span className="font-bold">full-stack web developer</span> based in <span className="font-bold">Sydney,</span>{" "}
				Australia. My current focus is <span className="underline">React (Next.js).</span>
			</motion.p>
		</section>
	);
}
