// import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Reveal from "@/components/motion/Reveal";

import dynamic from "next/dynamic";

const AboutWithNoSSR = dynamic(() => import("@/components/About"), { ssr: false });

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<Intro />
			{/* <SectionDivider /> */}
			{/* <Reveal duration={0.8}>
			</Reveal> */}
			{/* <About /> */}
			<AboutWithNoSSR />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
