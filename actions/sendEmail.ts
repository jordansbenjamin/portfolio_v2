"use server";

// implementing server action
export const sendEmail = async (formData: FormData) => {
	// This is going to run on the server, so this is required:

	console.log("Running on server");
	console.log(formData.get("senderEmail"));
	console.log(formData.get("message"));
};
