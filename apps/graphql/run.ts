import {
  GraphQLContext,
  getStandaloneServerContext,
} from "@abir-taheer/graphql/context";
import { server } from "@abir-taheer/graphql/server";
import { startStandaloneServer } from "@apollo/server/standalone";

startStandaloneServer<GraphQLContext>(server, {
  context: getStandaloneServerContext,
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

process.on("exit", () => {
  console.log("Shutting down GraphQL server...");
});
