import type { User } from "@supabase/supabase-js";
import { getTranslations } from "next-intl/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = async ({ user }: { user: User }) => {
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
            <AvatarImage alt={user?.user_metadata.full_name} src={user?.user_metadata.avatar_url} />
            <AvatarFallback>{user?.user_metadata.full_name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className='font-bold text-2xl'>{user?.user_metadata.full_name}</h2>
            <p className='text-muted-foreground'>{user?.email}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { Profile };
