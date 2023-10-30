import { NotFoundError } from "@abir-taheer/graphql/errors/NotFoundError";
import { IGraphQLQueryResolvers } from "@abir-taheer/graphql/generated/graphql";

export const user: IGraphQLQueryResolvers["user"] = async (
  _,
  { id },
  { db },
) => {
  const user = await db.user.findFirst({ where: { id } });

  if (!user) {
    throw new NotFoundError("There is no user with that id");
  }

  return user;
};
