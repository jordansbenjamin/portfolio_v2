import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// To prevent absolute or relative pathing, use the @ instead
// It's added by next.js in the TS config file under paths as an alias
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

// Metadata is necessary for what you see in the tabs
export const metadata: Metadata = {
	title: "Jordan | Portfolio",
	description: "Jordan is an up and coming full-stack developer.",
};

// This is the root component of the app
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
				{/* Relative is required on the body because the BG div elements are absolute,
          so it needs to be relative to the body
        */}
				{/* BG blurred gradient elements */}
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
					<Toaster position="top-right" />
				</ActiveSectionContextProvider>
				{/* For optimisation, its better if theme switch is outside the context
					because it doesnt require values from the context
				*/}
				<ThemeSwitch />
			</body>
		</html>
	);
}
