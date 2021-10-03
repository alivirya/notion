import {
  DatabaseResponseProperties,
  DatabaseResponsePropertyOptions,
} from "../notiontypes";

import { promises as fs } from "fs";

const readFile = async (filePath: string) => {
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
};

export const updateCalendarProperties = async (
  properties: DatabaseResponseProperties
) => {
  const notionData = await readFile("./notionData.json");

  for (const key in properties) {
    handleDataType(key, properties[key], notionData);
  }

  const jsonString = JSON.stringify(notionData);
  await fs.writeFile("./notionData.json", jsonString);
};

const handleDataType = (
  name: string,
  option: DatabaseResponsePropertyOptions,
  data: any
) => {
  if (option.type === "multi_select") {
    data[name] = option.multi_select.options.map((o: any) => o.name);
  } else if (option.type === "relation") {
    data[name] = option.relation.database_id;
  }
};
