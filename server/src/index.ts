import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers";
import cookieParser from "cookie-parser";
import { refreshToken } from "./utils/token";
import cors from "cors";

(async () => {
  await createConnection();
  const app = express();

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );
  app.use(cookieParser());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });

  app.get("/", (_, res) => {
    res.send("Hello !");
  });
  app.post("/refresh_token", async (req, res) => await refreshToken(req, res));

  app.listen(process.env.PORT || 4000, () => {
    console.log("🚀 Server runing at http://localhost:4000");
  });
  //console.log("Hello World ! 🚀");
})();
