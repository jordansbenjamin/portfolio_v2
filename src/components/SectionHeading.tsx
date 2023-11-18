import React from "react";

type ScetionHeadingProps = {
	children: React.ReactNode;
};

export default function SectionHeading({ children }: ScetionHeadingProps) {
	return <h2 className="font-gallient text-7xl font-medium capitalize mb-8 text-center">{children}</h2>;
}
