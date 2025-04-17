import { Link } from "@/configs/i18n/routing";
import { useTranslations } from "next-intl";
import { default as NextLink } from "next/link";
import { LocaleSelect } from "./LocalSlelect.client";
import { ModeToggle } from "./ModeToggle.client";
import { UserProfile } from "./UserProfile.client";

const Header = () => {
  const tHeader = useTranslations("header");

  return (
    <header className='shadow-md border-b-2'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center flex-col gap-4 md:flex-row'>
        <div className='flex items-center uppercase font-bold text-xl'>
          <Link prefetch={true} href='/'>
            {tHeader("logoName")}
          </Link>
        </div>
        <div className='flex gap-2 items-center'>
          <NextLink
            href='/api-docs'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary mr-0'
          >
            {tHeader("apiDocs")}
          </NextLink>
          <LocaleSelect />
          <ModeToggle />
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export { Header };
