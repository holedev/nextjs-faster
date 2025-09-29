import { useTranslations } from "next-intl";
import type { ResponseType, SuccessResponseType } from "@/types/response";
import { useToast } from "./use-toast";

type HandleErrorType = {
  cb: () => Promise<ResponseType>;
  onSuccess?: ({ data }: { data: SuccessResponseType }) => void;
  withSuccessNotify?: boolean;
};

const useHandleError = () => {
  const { toast } = useToast();
  const t = useTranslations("common.notify");

  const handleErrorClient = async ({
    cb,
    onSuccess = () => {
      /* no-op */
    },
    withSuccessNotify = true
  }: HandleErrorType) => {
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

      onSuccess({ data: data ?? {} });
    } catch (error) {
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
