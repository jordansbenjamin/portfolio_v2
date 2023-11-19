"use client";

import React from "react";
import { motion } from "framer-motion";
import useDetectScroll from "@smakss/react-scroll-direction";

export default function SectionDivider() {
	const scrollDir = useDetectScroll();

	return (
		<motion.div
			className={`bg-gray-200 animate-bounce fixed bottom-5 left-[50%] h-12 w-1 rounded-full hidden sm:block dark:bg-opacity-20`}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: scrollDir === 'down' ? 0 : 1, y: 0 }}
			transition={{ delay: 0.25, duration: 1 }}></motion.div>
	);
}
