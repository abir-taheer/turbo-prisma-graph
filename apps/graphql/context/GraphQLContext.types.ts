import { PrismaClient, User } from "@abir-taheer/models";

export type GraphQLContext = {
  db: PrismaClient;
  user: User | null;
};
