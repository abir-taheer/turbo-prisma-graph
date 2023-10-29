import type { CodegenConfig } from "@graphql-codegen/cli/typings";
import { fullSchemaString } from "@abir-taheer/graphql/codegen/fullSchema";
import { ensureDirExists } from "@abir-taheer/graphql/utils/fs";
import * as path from "path";
import * as fs from "fs";

const graphql_package_dir_path = path.dirname(
  require.resolve("@abir-taheer/graphql"),
);
const graphql__generated_folder_path = path.join(
  graphql_package_dir_path,
  "generated/graphql/",
);

const contextPath = path.join(graphql_package_dir_path, "context");

const schemaPath = path.join(graphql__generated_folder_path, "schema.graphql");

ensureDirExists(graphql__generated_folder_path);

fs.writeFileSync(schemaPath, fullSchemaString);

export const codegen_config: CodegenConfig = {
  overwrite: true,
  schema: fullSchemaString,
  generates: {
    [path.join(graphql__generated_folder_path, "index.ts")]: {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "@abir-taheer/graphql/context#GraphQLContext",
      },
    },
    [path.join(graphql__generated_folder_path, "graphql.schema.json")]: {
      plugins: ["introspection"],
    },
  },
};

export default codegen_config;
