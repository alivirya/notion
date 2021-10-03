import { GetDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export declare type DatabaseResponseProperties =
  GetDatabaseResponse["properties"];
export declare type DatabaseResponsePropertyOptions =
  GetDatabaseResponse["properties"][keyof GetDatabaseResponse["properties"]];
