import { IGraphQLUserResolvers } from "@abir-taheer/graphql/generated/graphql";

export const email: IGraphQLUserResolvers["email"] = (parent) => {
  // maybe return false if the user is not the same as the logged-in user
  return parent.email;
};
