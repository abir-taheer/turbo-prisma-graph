import { typeDefs } from "@abir-taheer/graphql/typeDefs";
import { printSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

const schema = makeExecutableSchema({ typeDefs });
export const fullSchemaString = printSchema(schema);
