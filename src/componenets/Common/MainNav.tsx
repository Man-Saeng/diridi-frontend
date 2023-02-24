import Link from "next/link";
import { ReactNode } from "react";
import { NoneProfileIcon, SearchIcon } from "./Icons";

type TMainNavProps = {
  domainIcon: ReactNode;
};

function MainNav(props: TMainNavProps) {
  return (
    <nav className="m-auto flex h-full max-w-screen-labtop items-center gap-16pxr px-16pxr">
      <div>{props.domainIcon}</div>
      <div className="ml-auto">
        <Link href="/search">
          <SearchIcon />
        </Link>
      </div>
      <div>
        <Link href="/auth/login">
          <NoneProfileIcon />
        </Link>
      </div>
    </nav>
  );
}

export default MainNav;
