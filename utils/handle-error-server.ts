import type { User } from "@supabase/supabase-js";
import { createClientSsr } from "@/configs/supabase/server";
import type { ResponseType } from "@/types/response";
import { ErrorResponse, SuccessResponse } from "./response";

type HandleErrorServerType = {
  cb: ({ user }: { user?: User }) => Promise<object>;
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
    const supabase = await createClientSsr();
    const { data, error: authError } = await supabase.auth.getUser();

    if (authError) {
      return ErrorResponse({ message: authError.message });
    }

    if (!data.user) {
      return ErrorResponse({ message: "Unauthorized" });
    }

    const res = await cb({ user: data.user });
    return SuccessResponse({ payload: res });
  } catch (error) {
    if (error instanceof Error) {
      return ErrorResponse({ message: error.message });
    }
    return ErrorResponse({ message: "Unknown error occurred!" });
  }
};

export { handleErrorServerNoAuth, handleErrorServerWithAuth };
