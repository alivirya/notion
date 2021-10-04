#! /usr/bin/env node --experimental-specifier-resolution=node

import { TextColors, changeTextColor } from "./util/cli";
import {
  createNewCalendarEntry,
  getCalendarInformation,
} from "./dbUtil/calendar";

import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import { hideBin } from "yargs/helpers";
import readline from "readline";
import util from "util";
import yargs from "yargs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: this doesn't seem to work so i need to fix this
const question = util.promisify(rl.question).bind(rl);

dotenv.config();

const calendarDb = process.env.CALENDAR_DB!;
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const handleCreateEvent = async () => {
  //  TODO: promisify this
  rl.question(
    `${changeTextColor("Name of event ", TextColors.Magenta)}` +
      `${changeTextColor("", TextColors.White)}`,
    async (name) => {
      await createNewCalendarEntry(notion, calendarDb, name);
      rl.close();
    }
  );
};

const argv = yargs(hideBin(process.argv))
  .command("event", "create a calendar event", () => {
    handleCreateEvent();
  })
  .help().argv;
