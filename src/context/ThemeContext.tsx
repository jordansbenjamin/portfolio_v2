"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

// union type
type Theme = "light" | "dark";

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

// The default value is not the same as the default value in the state
// The default value is whats gonna happen when you try access the context outside the provider component
// which rarely happens
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Could use interface, type and interface is almost the same
type ThemeContextProviderProps = {
	children: React.ReactNode;
};

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
	// <Theme> TS generics
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			// persist state to local storage
			// This is done on this handler because its based user actions
			// in this case, toggling the theme on and off
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	};

	// To synchronise with an external system, in this case local storage
	// useEffect is a great use case for that
	// Everytime the user toggles the theme, it will set the local storage with
	// that respective theme, and we use localstorage because we want that info
	// to persist. And we use useEffect here, because we need to get the persisted
	// theme data from local storage everytime the user re-load or re-visits the page

	// componentOnMount because its only when the component loads,
	// so when the user perhaps revisit the page later
	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme") as Theme | null;

		// if local theme is not null (exists)
		if (localTheme) {
			// set the theme with the currently saved local theme
			setTheme(localTheme);

			if (localTheme === "dark") {
				document.documentElement.classList.add("dark");
			}
			// if nothing is on local storage we want to check the users computer settings
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}