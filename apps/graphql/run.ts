import { GraphQLContext } from "@abir-taheer/graphql/context";
import { generateGraphQLContext } from "@abir-taheer/graphql/context/generateContext";
import { server } from "@abir-taheer/graphql/server";
import { HeaderMap } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

startStandaloneServer<GraphQLContext>(server, {
  context: async ({ req }) => {
    const h = req.headers as Record<string, string>;
    const headers = new HeaderMap(Object.entries(h));

    const ip =
      req.headers["x-forwarded-for"] ??
      req.socket.remoteAddress ??
      req.connection.remoteAddress;

    return await generateGraphQLContext({ headers, ipAddress: ip as string });
  },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
