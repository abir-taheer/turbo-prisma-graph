export const QueryDef = /* GraphQL */ `
  type Query {
    greeting(name: String): String!

    user(id: ID!): User!
  }
`;
