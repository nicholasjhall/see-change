import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from "./schema/types";
import { resolvers } from "./schema/resolvers";
import { Users } from "./entities/Users";
import { Logs } from "./entities/Logs";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "SeeChange",
    username: "root",
    password: "password",
    logging: true,
    synchronize: false,
    entities: [Users, Logs],
  });

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  })

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/graphql", graphqlHTTP({
      schema,
      graphiql: true
  }))

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
