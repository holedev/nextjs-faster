import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "@/configs/i18n/routing";
import { _ROUTE_PROFILE } from "@/constants/route";
import { getRandomPastelColor, handleDatetime } from "@/utils/handle-datetime";
import { getAllNickname } from "./actions";

type NicknameType = {
  content: string;
  updatedAt: string;
  color: string;
};

const UserList = async () => {
  const t = await getTranslations("home.nickname");
  const tCommonText = await getTranslations("common.text");

  const { data, error } = await getAllNickname();
  if (error) {
    throw new Error(error.message);
  }
  const nicknames = data?.payload as NicknameType[];

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div className='text-center'>
        <h2 className='font-bold text-xl uppercase'>{t("title")}</h2>
        <p className='text-muted-foreground text-sm italic'>
          {t("description")}{" "}
          <Link className='text-primary hover:underline' href={_ROUTE_PROFILE}>
            {tCommonText("here")}.
          </Link>
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-2'>
        {nicknames?.map((nickname, _) => {
          const randomBackgroundColor = getRandomPastelColor();

          return (
            <Tooltip key={nickname.content}>
              <TooltipTrigger>
                <Badge className='rounded-md text-md' style={{ background: randomBackgroundColor }}>
                  {nickname.content}
                </Badge>
              </TooltipTrigger>
              <TooltipContent side='bottom'>
                <p className='text-muted-foreground'>{handleDatetime(new Date(nickname.updatedAt))}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export { UserList };
