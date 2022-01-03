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
    createUser(name: String!, email: String!, password: String!): ID
  }

  type Log {
    id: ID!
    date: String!
    exercise: Int
    calories: Int
    weight: Int
    notes: String
    userId: User!
  }

  extend type Query {
    logs: [Log!]
    log(id: ID!): Log
    userLogs(id: ID!): [Log!]
  }

  extend type Mutation {
    createLog(date: String!, exercise: Int, calories: Int, weight: Int, notes: String, user: ID!): ID
  }
`;