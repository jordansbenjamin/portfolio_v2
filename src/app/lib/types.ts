import { links } from "./data";
// This custom type is put in its own file as its used with other parts of the app

// It should be any type of links (based on its index, the number) based on the name property
export type SectionName = (typeof links)[number]["name"];
