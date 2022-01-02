import { Users } from "../entities/Users";

export const typeDef = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    logs: [Log!]
  }

  extend type Query {
    users: [User!]
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`;

export const resolvers = {
  Query: {
    users: () => {
      return Users.find();
    },
    user: (parent: any, args: any) => {
      return Users.findOne({ id: args.id });
    },
  },
  Mutation: {
    createUser: async (parent: any, args: any) => {
      const { name, email, password } = args;
      const newUser = await Users.create({
        name: name,
        email: email,
        password: password,
        logs: [],
      });
      return newUser;
    },
  },
};
