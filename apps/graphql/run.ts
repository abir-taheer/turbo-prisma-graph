import { server } from "@abir-taheer/graphql/server";
import { startStandaloneServer } from "@apollo/server/standalone";

startStandaloneServer(server).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

process.on("exit", () => {
  console.log("Shutting down GraphQL server...");
});
