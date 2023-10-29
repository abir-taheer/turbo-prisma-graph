import { UserDef } from "@abir-taheer/graphql/typeDefs/User";
import { QueryDef } from "./Query";
import { typeDefs as scalars } from "graphql-scalars";

export const typeDefs = [QueryDef, UserDef, ...scalars];
