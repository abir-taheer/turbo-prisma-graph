import { generateGraphQLContext } from "@abir-taheer/graphql/context/generateContext";
import { GraphQLContext } from "@abir-taheer/graphql/context/GraphQLContext.types";
import { HeaderMap } from "@apollo/server";
import { StartStandaloneServerOptions } from "@apollo/server/src/standalone";

export const getStandaloneServerContext: Exclude<
  StartStandaloneServerOptions<GraphQLContext>["context"],
  undefined
> = async ({ req }) => {
  // convert the requests headers to a header map
  const headers = new HeaderMap();

  Object.keys(req.headers).forEach((key) =>
    headers.set(key, req.headers[key] as string),
  );

  const ipAddress =
    (req.headers["x-forwarded-for"] as string) ||
    (req.socket.remoteAddress as string) ||
    (req.connection.remoteAddress as string);

  return await generateGraphQLContext({
    headers,
    ipAddress,
  });
};
