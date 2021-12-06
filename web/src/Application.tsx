import React from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://127.0.0.1:4000");

export const Application: React.FC = () => {
  React.useEffect(() => {
    client.onopen = () => {
      console.log("Connected !");
    };
    client.onmessage = (message: any) => {
      const msg = JSON.parse(message.data);
      console.log("got reply => ", msg);
    };
  }, []);

  const sendMessage = (value: string) => {
    client.send(
      JSON.stringify({
        type: "message",
        msg: value,
      })
    );
  };

  return (
    <>
      <button onClick={() => sendMessage("hello")}>send !</button>
    </>
  );
};
