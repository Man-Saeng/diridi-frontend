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

export interface IBottomNavItemProps {
  link: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
}

function BottomNavItem(props: IBottomNavItemProps) {
  const { link, icon, label, isActive } = props;

  return (
    <Link href={link}>
      <div className="flex flex-col items-center justify-center">
        <div>{icon}</div>
        <p className={isActive ? "bottom-nav-item-active" : "bottom-nav-item"}>
          {label}
        </p>
      </div>
    </Link>
  );
}

function BottomNav() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className="flex h-full justify-around py-8pxr">
      <BottomNavItem
        link="/"
        icon={
          currentPath.startsWith("/home") ? <ActiveHomeIcon /> : <HomeIcon />
        }
        label="홈"
        isActive={currentPath.startsWith("/home")}
      />
      <BottomNavItem
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
      <BottomNavItem
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
      <BottomNavItem
        link="/my"
        icon={
          currentPath.startsWith("/inven") ? <ActiveInvenIcon /> : <InvenIcon />
        }
        label="보관함"
        isActive={currentPath.startsWith("/inven")}
      />
      <BottomNavItem
        link="/studio"
        icon={
          currentPath.startsWith("/studio") ? <StudioIcon /> : <StudioIcon />
        }
        label="내 작품"
        isActive={currentPath == "/studio"}
      />
    </nav>
  );
}

export default BottomNav;
