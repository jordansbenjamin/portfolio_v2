"use client";

import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

// union type
type Theme = "light" | "dark";

export default function ThemeSwitch() {
	// <Theme> TS generics
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			// persist state to local storage
			// This is done on this hadnler because its based user actions
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
		<button
			className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
			onClick={toggleTheme}>
			{theme === "light" ? <BsSun /> : <BsMoon />}
		</button>
	);
}
