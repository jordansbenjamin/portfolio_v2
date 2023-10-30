// Helper function (server side validation)
export const validateString = (value: unknown, maxLength: number) => {
    // Because typescript thinks that message might be null
    // And also thinks it might be of type file or string?
    if (!value || typeof value !== "string" || value.length > maxLength) {
        // If not value (if value is null) or value is not type of string
        // or length of value is greater than maxLength
        // Then it fails validation, hence false
        // in other words:
        // does it actually exist? Is it a string? If not then:
        return false;
    }
    // otherwise:
    return true;
};

// Extracting this away for cleaner error handling when catching errors
export const getErrorMessage = (error: unknown): string => {
	let message: string;

	// Essentially here we're checking two different possibilities
	// of how resend throws errros whether its with an object or
	// Error constructor

	// if resend throws an error from the Error constructor, do this:
	if (error instanceof Error) {
		// console.log(error);
		message = error.message;
    // If its type object and message is in that error object
	} else if (error && typeof error === "object" && "message" in error) {
		// since error cant be null we have to check if it exists
		// before we check if message is in the error object
		message = String(error.message);
    // If its type string, then return the error itself
	} else if (typeof error === 'string') {
        message = error;
    // else if its none of the above
    } else {
        message = "Something went wrong"
    }

	return message;
};