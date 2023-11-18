"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type RevealProps = {
	// Instead of React.Reactnode
	children: JSX.Element;
    // The ? makes duration optional
	duration?: number;
};

export default function Reveal({ children, duration = 0.25 }: RevealProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			// Fire the animation
			// mainControls fires (start) the animation mapped to the visible variant
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);

	return (
		<div>
			<motion.div
				ref={ref}
				// Variants are different states of an animation
				variants={{
					// Can name variants to whatever we want
					// hidden is initial state
					hidden: { opacity: 0, y: 100 },
					visible: { opacity: 1, y: 0 },
				}}
				// initial state mapped to hidden variant
				initial="hidden"
				animate={mainControls}
				transition={{ duration, delay: 0.25 }}>
				{children}
			</motion.div>
		</div>
	);
}
