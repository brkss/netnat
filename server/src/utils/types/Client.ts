import { connection } from "websocket";

export interface IClient {
  uuid: string;
  name: string;
  connection: connection;
}
