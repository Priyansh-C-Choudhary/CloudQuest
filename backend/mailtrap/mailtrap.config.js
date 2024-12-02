import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
	email: "hello@major1cloudquest.cloud",
	name: "CloudQuest",
};

export const recipient = {
	email: "priyansh474@gmail.com"
};
