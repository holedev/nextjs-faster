import type { ErrorResponseType, ResponseType, SuccessResponseType } from "@/types/response";

const ErrorResponse = ({ status = 500, message = "Internal Server Error" }: ErrorResponseType): ResponseType => ({
  error: { status, message },
  data: null
});

const SuccessResponse = ({ status = 200, payload = {} }: SuccessResponseType): ResponseType => ({
  error: null,
  data: { status, payload }
});

export { ErrorResponse, SuccessResponse };
