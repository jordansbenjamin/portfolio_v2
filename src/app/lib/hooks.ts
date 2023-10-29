import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

// Abstracting this functionality into a hook for DRY code
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
	// Intersection observer API
	// InView will return boolean if the section is in view
	// You can add an options object and change the threshold
	// and now when 50% of the
	const { ref, inView } = useInView({
		threshold,
	});
	// console.log(inView);

	// Consuming context to grab setter for active section
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	// Use useEffect when you want to synchronise state with some external system, like a context provider
	useEffect(() => {
		// If the About section is inView
		// And if the current time minus the timeOfLastClick is greater than 1 second
		// then setActiveSection to About
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName);
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName]);

	return {
		ref,
	};
}
