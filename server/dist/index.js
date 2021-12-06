"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const websocket_1 = require("websocket");
const uuid_1 = require("uuid");
const PORT = 4000;
(async () => {
    const _room = {};
    console.log("uuid => ", (0, uuid_1.v4)());
    const serv = http_1.default.createServer();
    serv.listen(PORT);
    console.log(`🚀 server runing at http://localhost:${PORT} !`);
    const ws = new websocket_1.server({
        httpServer: serv,
    });
    ws.on("request", (request) => {
        const userID = (0, uuid_1.v4)();
        console.log(`[${new Date()}] recieved new reauest from ${request.origin}`);
        const connection = request.accept("", request.origin);
        _room[userID] = connection;
        console.log(`user joined the room ${userID}`);
    });
})();
//# sourceMappingURL=index.js.map