import React from "react";
import { SocketContext } from "../utils/socket/socket";

export const Home: React.FC = () => {
  const client = React.useContext(SocketContext);
  React.useEffect(() => {
    client.onopen = () => {
      console.log("Connected from Home !");
    };
  }, []);

  return <>Home !</>;
};
