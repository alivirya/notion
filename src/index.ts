import { Client } from "@notionhq/client";
import { config } from "dotenv";

config();
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const listUsers = await notion.users.list({});
console.log(listUsers);
