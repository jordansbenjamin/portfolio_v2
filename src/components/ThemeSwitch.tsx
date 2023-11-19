"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
	// useTheme context hook
	const { theme, toggleTheme } = useTheme();

	return (
		<motion.div
			className="fixed bottom-5 right-5"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.1 }}>
			<button
				className=" bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] borderBlack dark:border-white dark:border-opacity-30 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
				onClick={toggleTheme}>
				{theme === "light" ? <BsSun /> : <BsMoon />}
			</button>
		</motion.div>
	);
}
