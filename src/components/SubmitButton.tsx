import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
	// This component was a simple button element
	// but to use useFormStatus() it has to be one level deeper
	// it cant be a sibling to where the form and server action is

	// server action hook to get form status
	const { pending } = useFormStatus();

	return (
		<button
			className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all mx-auto focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-60"
			// If pending is true, disable the button (prevents accidentale dbl click)
			disabled={pending}
			type="submit">
			{pending ? (
				// Tailwind spinner
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				// Had to wrap in react fragment because it has to be 1 element
				<>
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
				</>
			)}
		</button>
	);
}
