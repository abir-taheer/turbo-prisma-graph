import { User, PrismaClient } from "@abir-taheer/models";

export type GraphQLContext = {
  user?: User;
  db: PrismaClient;
};
