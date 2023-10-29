import { QueryResolvers } from "@abir-taheer/graphql/generated/graphql";

export const greeting: QueryResolvers["greeting"] = (_, { name }) =>
  ["Hey", name].filter(Boolean).join(" ") + "!";
