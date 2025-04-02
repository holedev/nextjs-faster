import { ResponseType, SuccessResponseType } from "@/types/response";
import { useTranslations } from "next-intl";
import { useToast } from "./use-toast";

type handleErrorType = {
  cb: () => Promise<ResponseType>;
  onSuccess?: ({ data }: { data: SuccessResponseType }) => void;
  withSuccessNotify?: boolean;
};

const useHandleError = () => {
  const { toast } = useToast();
  const t = useTranslations("common.notify");

  const handleErrorClient = async ({ cb, onSuccess = () => {}, withSuccessNotify = true }: handleErrorType) => {
    try {
      const { error, data } = await cb();

      if (error) {
        toast({
          title: t("error.title"),
          description: error.message,
          variant: "destructive"
        });
        return;
      }

      if (withSuccessNotify) {
        toast({
          title: t("success.title"),
          description: t("success.message")
        });
      }

      onSuccess({ data: data! });
    } catch (error) {
      console.error("[useHandleError.tsx:34] ", error);
      if (error instanceof Error) {
        toast({
          title: t("error.unknownError"),
          description: error.message,
          variant: "destructive"
        });
        return;
      }
    }
  };

  return { handleErrorClient, toast };
};

export { useHandleError };
