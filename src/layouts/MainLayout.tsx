import { HomeIcon } from "@/componenets/Common/Icons";
import { TLayoutProps } from ".";
import DomainNav from "@/componenets/Common/DomainNav";

function MainLayout(props: TLayoutProps) {
  return (
    <>
      <header className="main-header-wrapper">
        <DomainNav domainIcon={<HomeIcon />} />
      </header>
      <main className="main-wrapper">
        <aside className="sidebar-wrapper"></aside>
        <article className="article-wrapper">
          {props.children}
          <div className="bottom-nav-wrapper"></div>
        </article>
      </main>
    </>
  );
}

export default MainLayout;
