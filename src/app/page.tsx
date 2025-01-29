"use client";
import { useMediaQuery } from "usehooks-ts";
import MenuIcon from "@/assets/icons/menu.svg";
import { useState } from "react";
import ActivePage from "@/app/active/page";
import LeaderboardPage from "@/app/leaderboard/page";
import Tabs, { Tab } from "@/components/Tabs/tabs";

const tabs: Tab[] = [
  { name: "Active", value: "active" },
  { name: "Leaderboard", value: "leaderboard" },
];

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState("active");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const currentTabName = tabs.find((tab) => tab.value === currentTab)?.name;

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = (newTab: string) => {
    setIsMenuOpen(false);
    setCurrentTab(newTab);
  };

  return (
    <>
      {isDesktop ? (
        <div className="flex">
          <Tabs
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          {currentTab === "active" && <ActivePage />}
          {currentTab === "leaderboard" && <LeaderboardPage />}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center gap-2 w-200 border-b-2 border-grey-500 p-2">
            <MenuIcon
              className="w-6 h-6 fill-black cursor-pointer"
              onClick={handleOpenMenu}
            />
            <p className="font-bold underline">{currentTabName}</p>
          </div>
          {currentTab === "active" && <ActivePage />}
          {currentTab === "leaderboard" && <LeaderboardPage />}
          {isMenuOpen && (
            <Tabs
              className="absolute bg-white"
              tabs={tabs}
              currentTab={currentTab}
              setCurrentTab={handleCloseMenu}
            />
          )}
        </div>
      )}
    </>
  );
}
