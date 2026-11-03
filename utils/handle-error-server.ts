import type { JwtPayload } from "@supabase/supabase-js";
import { getAuthClaims } from "@/configs/supabase/server";
import type { ResponseType } from "@/types/response";
import { ErrorResponse, SuccessResponse } from "./response";

type HandleErrorServerType = {
  cb: ({ claims }: { claims?: JwtPayload }) => Promise<object>;
};

const handleErrorServerNoAuth = async ({ cb }: HandleErrorServerType): Promise<ResponseType> => {
  try {
    const res = await cb({});
    return SuccessResponse({ payload: res });
  } catch (error) {
    if (error instanceof Error) {
      return ErrorResponse({ message: error.message });
    }
    return ErrorResponse({ message: "Unknown error occurred!" });
  }
};

const handleErrorServerWithAuth = async ({ cb }: HandleErrorServerType): Promise<ResponseType> => {
  try {
    const claims = await getAuthClaims();

    if (!claims) {
      return ErrorResponse({ status: 401, message: "Unauthorized" });
    }

    const res = await cb({ claims });
    return SuccessResponse({ payload: res });
  } catch (error) {
    if (error instanceof Error) {
      return ErrorResponse({ message: error.message });
    }
    return ErrorResponse({ message: "Unknown error occurred!" });
  }
};

export { handleErrorServerNoAuth, handleErrorServerWithAuth };
