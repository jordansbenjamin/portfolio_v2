import React, { Children } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

type SocialButtonProp = {
	children: React.ReactNode;
	href: string;
};

function SocialButton({ children, href }: SocialButtonProp) {
	return (
		<a
			href={href}
			target="_blank"
			className="bg-white shadow-2xl p-3.5 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60">
			{children}
		</a>
	);
}

type SocialContainerType = {
	children: React.ReactNode;
};

export default function SocialContainer() {
	return (
		<motion.div
			className="fixed bottom-5 left-5 space-y-2"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}>
			<SocialButton href="https://www.linkedin.com/in/jordansb/">
				<BsLinkedin />
			</SocialButton>
			<SocialButton href="https://www.linkedin.com/in/jordansb/">
				<FaGithubSquare />
			</SocialButton>
		</motion.div>
	);
}
