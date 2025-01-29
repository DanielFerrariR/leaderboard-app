"use client";
import { useMediaQuery } from "usehooks-ts";
import MenuIcon from "@/assets/icons/menu.svg";
import { useState } from "react";
import classNames from "classnames";

enum Tabs {
  active,
  leaderboard,
}

export default function Home() {
  const [isActive, setIsActive] = useState(Tabs.active);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isDesktop ? (
        <div className="flex">
          <div className="w-200 border-r-2 border-grey-500 h-dvh w-40 min-w-40 p-4">
            <button
              className={classNames(
                isActive === Tabs.active && "font-bold",
                "underline cursor-pointer hover:underline"
              )}
              onClick={() => setIsActive(Tabs.active)}
            >
              Active
            </button>
            <button
              className={classNames(
                isActive === Tabs.leaderboard && "font-bold",
                "underline cursor-pointer hover:text-gray-700"
              )}
              onClick={() => setIsActive(Tabs.leaderboard)}
            >
              Leaderboard
            </button>
          </div>
          <div className="h-dvh w-full p-4">Leaderboard</div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center gap-2 w-200 border-b-2 border-grey-500 p-2">
            <MenuIcon className="w-6 h-6 fill-black cursor-pointer" />
            <p className="font-bold underline">Active</p>
          </div>
          <div className="h-dvh w-full p-4">Leaderboard</div>
        </div>
      )}
    </>
  );
}
