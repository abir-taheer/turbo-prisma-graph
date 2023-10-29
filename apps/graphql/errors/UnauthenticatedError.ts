import { GraphQLError } from "graphql";

export class UnauthenticatedError extends GraphQLError {
  constructor(message?: string) {
    super(message ?? "You need to be authenticated to perform this action.", {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    });
  }
}
