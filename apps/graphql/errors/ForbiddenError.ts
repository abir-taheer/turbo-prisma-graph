import { GraphQLError } from "graphql";

export class ForbiddenError extends GraphQLError {
  constructor(message?: string) {
    super(message ?? "You are not allowed to perform that action", {
      extensions: {
        code: "FORBIDDEN",
      },
    });
  }
}
