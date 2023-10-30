import { GraphQLContext } from "@abir-taheer/graphql/context/GraphQLContext.types";
import { PrismaClient } from "@abir-taheer/models";
import { HeaderMap } from "@apollo/server";

export type GenerateGraphQLContextParams = {
  headers: HeaderMap;
  ipAddress: string;
};

let db: PrismaClient;

export const generateGraphQLContext = async ({
  headers,
  ipAddress,
}: GenerateGraphQLContextParams): Promise<GraphQLContext> => {
  if (!db) {
    db = new PrismaClient();
  }

  let user = undefined;

  return {
    db,
    user,
  };
};
