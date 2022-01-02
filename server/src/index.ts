import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { makeExecutableSchema } from "graphql-tools";
import { typeDef as User, resolvers as UserResolvers } from './schema/user';
import { typeDef as Log, resolvers as LogResolvers } from "./schema/log";
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

  const baseTypeDefs = `
    type Query
    type Mutation
  `;

  const schema = makeExecutableSchema({
    typeDefs: [baseTypeDefs, User, Log],
    resolvers: Object.assign({}, UserResolvers, LogResolvers)
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
