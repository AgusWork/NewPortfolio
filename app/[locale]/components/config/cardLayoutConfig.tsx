import { projects } from "@/app/[locale]/data/projects";
import { CardConfig } from "../types/cardLayout";

export const cardLayoutConfig: CardConfig[] = [
	{
		type: "double",
		projects: [projects[1], projects[0], projects[2]],
		height: "h-[80vh]",
	},
	{
		type: "full",
		projects: [projects[2]],
		height: "h-[45vh]",
	},
	{
		type: "double",
		projects: [projects[0], projects[2]],
		height: "h-[45vh]",
	},
	{
		type: "double",
		projects: [projects[0], projects[2], projects[1]],
		height: "h-[80vh]",
	},
];
