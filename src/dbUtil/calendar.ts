import {
  DatabaseResponseProperties,
  DatabaseResponsePropertyOptions,
} from "../notiontypes";

import { Client } from "@notionhq/client/build/src";
import { updateCalendarProperties } from "../util/file";

export const createNewCalendarEntry = async (
  notion: Client,
  calendarDb: string
) => {
  const response = await notion.pages.create({
    parent: {
      database_id: calendarDb,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: "7k run",
            },
          },
        ],
      },
      Tags: {
        multi_select: [
          {
            name: "Exercise ⛹️ 🏋️",
          },
        ],
      },
      Date: {
        date: { start: new Date().toISOString() },
      },
    },
  });
};

export const getCalendarInformation = async (
  notion: Client,
  calendarDb: string
) => {
  const response = await notion.databases.retrieve({
    database_id: calendarDb,
  });

  const properties = {
    Tags: response.properties.Tags,
    Who: response.properties.Who,
    People: response.properties.People,
    Media: response.properties.Media,
    Where: response.properties.Where,
    Name: response.properties.Name,
    Date: response.properties.Date,
  };

  updateCalendarProperties(properties);
};
