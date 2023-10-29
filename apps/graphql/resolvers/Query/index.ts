import { IGraphQLQueryResolvers } from "@abir-taheer/graphql/generated/graphql";
import { greeting } from "@abir-taheer/graphql/resolvers/Query/greeting";

export const QueryResolvers: IGraphQLQueryResolvers = {
  greeting,
};
