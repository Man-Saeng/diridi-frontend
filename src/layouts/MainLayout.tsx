import { TLayoutProps } from ".";

function MainLayout(props: TLayoutProps) {
  return (
    <>
      <header className="main-header-wrapper"></header>
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
