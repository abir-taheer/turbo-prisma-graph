import { ForbiddenError } from "@abir-taheer/graphql/errors";
import { IGraphQLUserResolvers } from "@abir-taheer/graphql/generated/graphql";

export const email: IGraphQLUserResolvers["email"] = (parent, _, { user }) => {
  if (user?.id !== parent.id) {
    throw new ForbiddenError("You are not allowed to view this user's email");
  }

  return parent.email;
};
