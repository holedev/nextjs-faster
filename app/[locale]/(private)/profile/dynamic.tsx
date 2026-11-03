import { getTranslations } from "next-intl/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProfileType } from "./actions";

const Profile = async ({ profile }: { profile: ProfileType }) => {
  const t = await getTranslations("profile");

  return (
    <Card>
      <CardHeader>
        <CardTitle className='font-bold text-xl uppercase'>{t("title")}</CardTitle>
        <CardDescription className='text-muted-foreground'>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex items-center space-x-4'>
          <Avatar className='h-20 w-20'>
            <AvatarImage alt={profile.fullName} src={profile.avatarUrl} />
            <AvatarFallback>{profile.fullName?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className='font-bold text-2xl'>{profile.fullName}</h2>
            <p className='text-muted-foreground'>{profile.email}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { Profile };
