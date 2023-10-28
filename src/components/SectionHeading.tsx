import React from "react";

type ScetionHeadingProps = {
	children: React.ReactNode;
};

export default function SectionHeading({ children }: ScetionHeadingProps) {
	return <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>;
}
