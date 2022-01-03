import { Users } from "../entities/Users";
import { Logs } from "../entities/Logs";

export const resolvers = {
  Query: {
    users: async () => {
      return await Users.find();
    },
    user: async (parent: any, args: any) => {
      return await Users.findOne({ id: args.id });
    },
    logs: async () => {
      return await Logs.find();
    },
    log: async (parent: any, args: any) => {
      return await Logs.findOne({ id: args.id });
    },
  },
  Mutation: {
    createUser: async (parent: any, args: any) => {
      const { name, email, password } = args;
      await Users.insert({
        name: name,
        email: email,
        password: password,
        logs: [],
      });
      return "User created";
    },
  },
};