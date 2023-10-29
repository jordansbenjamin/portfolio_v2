"use client";

// Importing type more specific
import type { SectionName } from "@/app/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextProviderProps = {
	children: React.ReactNode;
};

// Since TS infers that the context is type null, it will throw an error
// for the values passed into the context, so we need to tell TS the type
// and shape of the context
type ActiveSectionContextType = {
	activeSection: SectionName;
	// You can hover over to check the type suggested/inferred by TS
	// In this case its the types of section names which is a type we already defined
	// so we use it in the generic here:
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// If there is no meaningful default value, add null
// because you don't really want anything to access the value outside of the context anyways
// So you can use null, add a union type
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>("Home");
	// This is required as we need to keep track of the time the link was last clicked
	// In order to disable the observer API temporarily
	const [timeOfLastClick, setTimeOfLastClick] = useState(0);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
			}}>
			{children}
		</ActiveSectionContext.Provider>
	);
}

// custom hook
export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
	}

	return context;
}
