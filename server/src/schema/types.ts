export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    logs: [Log!]
  }

  type Query {
    users: [User!]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): String
  }

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