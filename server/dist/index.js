"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolvers");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
(async () => {
    await (0, typeorm_1.createConnection)();
    const app = (0, express_1.default)();
    app.get("/", (_, res) => {
        res.send("Hello !");
    });
    app.use((0, cookie_parser_1.default)());
    app.post("/refresh_token", (req, _) => {
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [resolvers_1.UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    apolloServer.applyMiddleware({ app });
    app.listen(process.env.PORT || 4000, () => {
        console.log("🚀 Server runing at http://localhost:4000");
    });
})();
//# sourceMappingURL=index.js.map