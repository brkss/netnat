import React from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

export const client = new W3CWebSocket("ws://127.0.0.1:4000");
export const SocketContext = React.createContext(client);
