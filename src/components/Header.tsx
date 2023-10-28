"use client";
// use client allows for client side functionality: browser API, hooks
// motion uses hooks, and hooks can only be used in client components in Next.js
// so any interactivity should be a client component

import React from "react";
import { motion } from "framer-motion";

export default function Header() {
	// Relative is required to make the z index work
	return (
		<header className="z-[999] relative">
			<motion.div
				className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
				initial={{ y: -800, x: "-50%", opacity: 0 }}
				animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>
		</header>
	);
}
