"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/app/lib/utils";
import ContactFormEmail from "../email/ContactFormEmail";

// instantiating resend obj
const resend = new Resend(process.env.RESEND_API_KEY);

// implementing server action
// This is going to run on the server
// And it cant be inside a client component/file
// Thats why we have to extract it here
export const sendEmail = async (formData: FormData) => {
	// console.log("Running on server");
	// console.log(formData.get("senderEmail"));
	// console.log(formData.get("message"));

	// Extracting formData info
	const senderEmail = formData.get("senderEmail");
	const message = formData.get("message");

	// console.log(senderEmail);

	// Simple server side validations:

	// validate sender email
	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		};
	}

	// validate message
	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		};
	}

	try {
		// Sending email via resend
		await resend.emails.send({
			// from resend server/domain, because resend is handling this capability
			from: "Contact Form <onboarding@resend.dev>",
			// to send to my own email
			to: "jordansbenjamin@gmail.com",
			subject: "Message from contact form",
			// Required if you want to reply to the sender's email
			reply_to: senderEmail as string, // type assertion, bypassing TS type checking
			// text: message as string, // basically tells TS I know what this type should be

			// Using react email instead
			// Since this is a ts and not tsx, we need to do this:
			react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string }),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}
};
