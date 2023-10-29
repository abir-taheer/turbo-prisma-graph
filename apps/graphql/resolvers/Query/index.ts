import { IGraphQLQueryResolvers } from "@abir-taheer/graphql/generated/graphql";
import { greeting } from "@abir-taheer/graphql/resolvers/Query/greeting";
import { user } from "@abir-taheer/graphql/resolvers/Query/user";

export const QueryResolvers: IGraphQLQueryResolvers = {
  greeting,
  user,
};
