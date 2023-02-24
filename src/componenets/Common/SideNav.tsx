import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import {
  ActiveHomeIcon,
  ActiveInvenIcon,
  ActiveLatestIcon,
  ActiveRankingIcon,
  HomeIcon,
  InvenIcon,
  LatestIcon,
  RankingIcon,
  StudioIcon,
} from "./Icons";

export interface ISideNavItemProps {
  link: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
}

function SideNavItem(props: ISideNavItemProps) {
  const { link, icon, label, isActive } = props;

  return (
    <Link href={link}>
      <div className={isActive ? "side-nav-item-active" : "side-nav-item"}>
        <span>{icon}</span>
        <span className="px-8pxr text-[14px] font-bold ">{label}</span>
      </div>
    </Link>
  );
}

function SideNav() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className="flex flex-col pt-16pxr pr-24pxr">
      <SideNavItem
        link="/"
        icon={
          currentPath.startsWith("/home") ? <ActiveHomeIcon /> : <HomeIcon />
        }
        label="홈"
        isActive={currentPath.startsWith("/home")}
      />
      <SideNavItem
        link="/latest/all"
        icon={
          currentPath.startsWith("/latest") ? (
            <ActiveLatestIcon />
          ) : (
            <LatestIcon />
          )
        }
        label="최신"
        isActive={currentPath.startsWith("/latest")}
      />
      <SideNavItem
        link="/ranking/all"
        icon={
          currentPath.startsWith("/ranking") ? (
            <ActiveRankingIcon />
          ) : (
            <RankingIcon />
          )
        }
        label="랭킹"
        isActive={currentPath.startsWith("/ranking")}
      />
      <SideNavItem
        link="/inven"
        icon={
          currentPath.startsWith("/inven") ? <ActiveInvenIcon /> : <InvenIcon />
        }
        label="보관함"
        isActive={currentPath.startsWith("/inven")}
      />
      <SideNavItem
        link="/studio"
        icon={
          currentPath.startsWith("/studio") ? <StudioIcon /> : <StudioIcon />
        }
        label="내 작품"
        isActive={currentPath.startsWith("/studio")}
      />
    </nav>
  );
}

export default SideNav;
