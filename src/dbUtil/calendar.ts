import {
  DatabaseResponseProperties,
  DatabaseResponsePropertyOptions,
} from "../notiontypes";

import { Client } from "@notionhq/client/build/src";
import { updateCalendarProperties } from "../util/file";

export const createNewCalendarEntry = async (
  notion: Client,
  calendarDb: string,
  name: string
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
              content: name,
            },
          },
        ],
      },
      Tags: {
        multi_select: [
          {
            name: "Exercise âšī¸ đī¸",
          },
        ],
      },
      Date: {
        date: { start: new Date().toISOString().substr(0, 10) },
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
