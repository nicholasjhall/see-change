import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      id,
      name,
      email
    }
  }
`

export const GET_LOGS = gql`
  query {
    logs {
      id,
      date,
      exercise,
      calories,
      weight,
      notes,
    }
  }
`

