import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const calendarDb = process.env.CALENDAR_DB!;
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// const options = yargs
//   .usage("Usage: -c <name>")
//   .option("n", {
//     alias: "name",
//     describe: "Your name",
//     type: "string",
//     demandOption: true,
//   })
//   .option("s", {
//     alias: "search",
//     describe: "Search term",
//     type: "string",
//   }).argv;

const createNewCalendarEntry = async () => {
  const response = await notion.pages.create({
    parent: {
      database_id: calendarDb,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: "Test Entry",
            },
          },
        ],
      },
      Tags: {
        multi_select: [
          {
            name: "Reminder",
          },
        ],
      },
      Date: {
        date: { start: new Date().toISOString() },
      },
    },
  });
};

await createNewCalendarEntry();
