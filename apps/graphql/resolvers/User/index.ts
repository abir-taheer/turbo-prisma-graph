import { IGraphQLUserResolvers } from "@abir-taheer/graphql/generated/graphql";
import { email } from "@abir-taheer/graphql/resolvers/User/email";

export const UserResolvers: IGraphQLUserResolvers = {
  email,
};
