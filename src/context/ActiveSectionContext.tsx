"use client";

import React, { createContext, useContext, useState } from "react";
import { links } from "@/app/lib/data";

// It should be any type of links (based on its index, the number) based on the name property
type SectionName = (typeof links)[number]["name"];

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
};

// If there is no meaningful default value, add null
// because you don't really want anything to access the value outside of the context anyways
// So you can use null, add a union type
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>("Home");

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
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
