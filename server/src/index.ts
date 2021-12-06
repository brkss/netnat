import http from "http";
import { server } from "websocket";

const PORT: number = 4000;

(async () => {
  const serv = http.createServer();
  serv.listen(PORT);
  console.log(`🚀 server runing at http://localhost:${PORT} !`);

  const ws = new server({
    httpServer: serv,
  });
})();
