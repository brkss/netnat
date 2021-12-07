import React from "react";
import { IMessageEvent } from "websocket";
import { SocketContext } from "../utils/socket/socket";
import { Box, Center, Heading } from "@chakra-ui/react";
import { Button } from "../components";
import { Avatar } from "@chakra-ui/react";

export const Home: React.FC<any> = ({ history }) => {
  const client = React.useContext(SocketContext);
  const [info, SetInfo] = React.useState<any>({});

  React.useEffect(() => {
    client.onopen = () => {
      console.log("Connected from Home !");
    };
    client.onmessage = (message: IMessageEvent) => {
      const msg = JSON.parse(message.data as string);
      if (msg.type === "information")
        SetInfo(JSON.parse(message.data as string).value as any);
      if (msg.type === "join-accept") {
        history.push("feed");
        localStorage.setItem("_token", msg.token);
      }
    };
  }, []);

  const requestJoin = () => {
    const msg = JSON.stringify({
      type: "join-request",
      id: info.id,
    });
    client.send(msg);
  };

  return (
    <Box height={"100vh"} bg={"#1e191a"}>
      <Center h={"100%"}>
        <Box textAlign={"center"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://media.newyorker.com/photos/5909741d2179605b11ad8004/master/pass/Trammell-Kanye-West-Madison-Square-Garden.jpg"
          />
          <Heading color={"#c01828"} mb={"15px"} mt={"7px"} fontSize={"15px"}>
            You're known as{" "}
            <span style={{ color: "#f56371" }}>{info.uname}</span>
          </Heading>
          <Button onClick={() => requestJoin()} label={"Join"} />
        </Box>
      </Center>
    </Box>
  );
};
