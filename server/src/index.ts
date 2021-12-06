import http from "http";
import { server } from "websocket";
import { v4 as uuidv4 } from "uuid";

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
    _room[userID] = connection;
    console.log(`user joined the room ${userID}`);

    connection.on("message", (message) => {
      if (message.type == "utf8") {
        console.log("recieved message : ", message.utf8Data);

        // brodcast message to all connected clients
        for (let key in _room) {
          _room[key].sendUTF(message.utf8Data);
          console.log(`Message sent to ${_room[key]}`);
        }
      }
    });
  });
})();
