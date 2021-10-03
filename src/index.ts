#! /usr/bin/env node --experimental-specifier-resolution=node

import {
  createNewCalendarEntry,
  getCalendarInformation,
} from "./dbUtil/calendar";

import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import { hideBin } from "yargs/helpers";
import yargs from "yargs";

yargs(hideBin(process.argv))
  .command("event", "create a calendar event", () => {
    console.log("creating an event");
  })
  .help().argv;

// const calendarDb = process.env.CALENDAR_DB!;
// const notion = new Client({
//   auth: process.env.NOTION_TOKEN,
// });

// getCalendarInformation(notion, calendarDb);
