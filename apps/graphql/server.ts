import { GraphQLContext } from "@abir-taheer/graphql/context";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { resolvers } from "@abir-taheer/graphql/resolvers";
import { typeDefs } from "@abir-taheer/graphql/typeDefs";

import { createComplexityLimitRule } from "graphql-validation-complexity";

const ComplexityLimitRule = createComplexityLimitRule(35000, {
  scalarCost: 1,
  objectCost: 5,
  listFactor: 10,
});

export const server = new ApolloServer<GraphQLContext>({
  typeDefs,
  resolvers,
  introspection: true,
  validationRules: [ComplexityLimitRule],
  plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false })],
});
