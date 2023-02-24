import { LogoIcon } from "@/componenets/Common/Icons";
import { TLayoutProps } from ".";
import DomainNav from "@/componenets/Common/DomainNav";
import Link from "next/link";
import SideNav from "@/componenets/Common/SideNav";

function MainLayout(props: TLayoutProps) {
  return (
    <>
      <header className="main-header-wrapper">
        <DomainNav
          domainIcon={
            <Link href="/">
              <LogoIcon />
            </Link>
          }
        />
      </header>
      <main className="main-wrapper">
        <aside className="sidebar-wrapper">
          <SideNav />
        </aside>
        <article className="article-wrapper">
          {props.children}
          <div className="bottom-nav-wrapper"></div>
        </article>
      </main>
    </>
  );
}

export default MainLayout;
