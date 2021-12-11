import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers";
import cookieParser from "cookie-parser";

(async () => {
  await createConnection();
  const app = express();

  app.get("/", (_, res) => {
    res.send("Hello !");
  });
  app.use(cookieParser());
  app.post("/refresh_token", (req, _) => {
    //
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(process.env.PORT || 4000, () => {
    console.log("🚀 Server runing at http://localhost:4000");
  });
  //console.log("Hello World ! 🚀");
})();
