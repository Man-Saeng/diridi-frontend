import { LogoIcon } from "@/components/Common/Icons";
import { TLayoutProps } from ".";
import DomainNav from "@/components/Common/DomainNav";
import Link from "next/link";
import SideNav from "@/components/Common/SideNav";
import BottomNav from "@/components/Common/BottomNav";

function MainLayout(props: TLayoutProps) {
  return (
    <>
      <header className="main-header-wrapper">
        <DomainNav
          domainIcon={
            <Link href="/home">
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
          <div className="bottom-nav-wrapper">
            <BottomNav />
          </div>
        </article>
      </main>
    </>
  );
}

export default MainLayout;
