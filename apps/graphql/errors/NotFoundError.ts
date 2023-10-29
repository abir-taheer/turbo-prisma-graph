import { GraphQLError } from "graphql";

export class NotFoundError extends GraphQLError {
  constructor(message: string = "Could not find that resource") {
    super(message, {
      extensions: {
        code: "NOT_FOUND",
      },
    });
  }
}
