import { Logs } from "../entities/Logs";

export const typeDef = `
  type Log {
    id: ID!
    date: String!
    exercise: Int
    calories: Int
    weight: Int
    notes: String
    user: User!
  }

  extend type Query {
    logs: [Log!]
    log(id: ID!): Log
  }

`;

// extend type Mutation {
//   createLog(date: String!, exercise: Int, calories: Int, weight: Int, notes: String, user: User!): Log
// }

export const resolvers = {
  Query: {
    logs: () => {
      return Logs.find();
    },
    log: (parent: any, args: any) => {
      return Logs.findOne({ id: args.id });
    },
  },
};
