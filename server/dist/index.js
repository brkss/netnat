"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const websocket_1 = require("websocket");
const PORT = 4000;
(async () => {
    const serv = http_1.default.createServer();
    serv.listen(PORT);
    console.log(`🚀 server runing at http://localhost:${PORT} !`);
    const ws = new websocket_1.server({
        httpServer: serv,
    });
})();
//# sourceMappingURL=index.js.map