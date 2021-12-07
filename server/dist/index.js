"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const http_1 = __importDefault(require("http"));
const websocket_1 = require("websocket");
const uuid_1 = require("uuid");
const unique_names_generator_1 = require("unique-names-generator");
const gen_1 = require("./utils/token/gen");
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
        const client = createClientObject(connection);
        _room[client.uuid] = client;
        console.log(`user joined the room ${userID}`);
        _room[client.uuid].connection.sendUTF(JSON.stringify({
            type: "information",
            value: {
                uname: client.name,
                id: client.uuid,
            },
        }));
        connection.on("message", (message) => {
            if (message.type == "utf8") {
                const msg = JSON.parse(message.utf8Data);
                if (msg.type === "join-request") {
                    const token = (0, gen_1.genToken)(msg.id);
                    _room[msg.id].connection.sendUTF(JSON.stringify({
                        type: "join-accept",
                        token: token.token,
                    }));
                }
                console.log("join message => ", message.utf8Data);
            }
        });
    });
})();
const createClientObject = (cn) => {
    const ID = (0, uuid_1.v4)();
    const cname = (0, unique_names_generator_1.uniqueNamesGenerator)({
        dictionaries: [unique_names_generator_1.colors, unique_names_generator_1.animals],
        separator: "-",
    });
    const client = {
        uuid: ID,
        name: cname,
        connection: cn,
    };
    return client;
};
//# sourceMappingURL=index.js.map