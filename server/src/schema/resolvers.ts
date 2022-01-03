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
    userLogs: async (parent: any, args: any) => {
      return await Logs.find({
        relations: ["user"],
        where: { user: { id: args.id } },
      });
    },
  },
  Mutation: {
    createUser: async (parent: any, args: any) => {
      const { name, email, password } = args;
      const result = await Users.insert({
        name,
        email,
        password,
        logs: [],
      });
      console.log(result);
      return result.identifiers[0].id;
    },
    createLog: async (parent: any, args: any) => {
      const { date, exercise, calories, weight, notes, user } = args;
      const result = await Logs.insert({
        date,
        exercise,
        calories,
        weight,
        notes,
        user,
      });
      return result.identifiers[0].id;
    },
  },
};
