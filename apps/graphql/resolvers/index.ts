import { IGraphQLResolvers } from "@abir-taheer/graphql/generated/graphql";
import { QueryResolvers } from "@abir-taheer/graphql/resolvers/Query";
import { UserResolvers } from "@abir-taheer/graphql/resolvers/User";
import { resolvers as scalars } from "graphql-scalars";

export const resolvers: IGraphQLResolvers = {
  Query: QueryResolvers,
  User: UserResolvers,
  ...scalars,
};
