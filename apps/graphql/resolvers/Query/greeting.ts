import { IGraphQLQueryResolvers } from "@abir-taheer/graphql/generated/graphql";

export const greeting: IGraphQLQueryResolvers["greeting"] = (_, { name }) =>
  ["Hey", name].filter(Boolean).join(" ") + "!";
