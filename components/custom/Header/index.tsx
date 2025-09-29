import { default as NextLink } from "next/link";
import { useTranslations } from "next-intl";
import { Link } from "@/configs/i18n/routing";
import { LocaleSelect } from "./LocalSlelect.client";
import { ModeToggle } from "./ModeToggle.client";
import { UserProfile } from "./UserProfile.client";

const Header = () => {
  const tHeader = useTranslations("header");

  return (
    <header className='border-b-2 shadow-md'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row'>
        <div className='flex items-center font-bold text-xl uppercase'>
          <Link href='/' prefetch={true}>
            {tHeader("logoName")}
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <NextLink
            className='mr-0 font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
            href='/api-docs'
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
