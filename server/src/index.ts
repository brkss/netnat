import http from "http";
import { server, connection } from "websocket";
import { v4 as uuidv4 } from "uuid";
import { uniqueNamesGenerator, colors, animals } from "unique-names-generator";
import { IClient } from "./utils/types/Client";

const PORT: number = 4000;

(async () => {
  const _room: any = {};
  console.log("uuid => ", uuidv4());
  const serv = http.createServer();
  serv.listen(PORT);
  console.log(`🚀 server runing at http://localhost:${PORT} !`);

  const ws = new server({
    httpServer: serv,
  });

  ws.on("request", (request) => {
    const userID = uuidv4();
    console.log(`[${new Date()}] recieved new reauest from ${request.origin}`);

    // accept connection !
    const connection = request.accept("", request.origin);
    const client = createClientObject(connection);
    _room[client.uuid] = client;
    console.log(`user joined the room ${userID}`);

    // send back user informations
    _room[client.uuid].connection.sendUTF(
      JSON.stringify({
        type: "information",
        value: {
          uname: client.name,
          id: client.uuid,
        },
      })
    );

    connection.on("message", (message) => {
      if (message.type == "utf8") {
        console.log("recieved message : ", message.utf8Data);

        // brodcast message to all connected clients
        for (let key in _room) {
          _room[key].connection.sendUTF(message.utf8Data);
          console.log(`Message sent to ${_room[key].name}`);
        }
      }
    });
  });
})();

const createClientObject = (cn: connection): IClient => {
  const ID = uuidv4();
  const cname = uniqueNamesGenerator({
    dictionaries: [colors, animals],
    separator: "-",
  });

  // create client object
  const client: IClient = {
    uuid: ID,
    name: cname,
    connection: cn,
  };
  return client;
};
