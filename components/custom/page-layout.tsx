import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className='container flex-1'>{children}</main>
    <Footer />
  </>
);

export { PageLayout };
