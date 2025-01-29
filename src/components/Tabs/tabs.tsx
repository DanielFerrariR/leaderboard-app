import classNames from "classnames";

export type Tab = { name: string; value: string };

interface TabsProps {
  className?: string;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  tabs: Tab[];
}

export default function Tabs({
  className,
  currentTab,
  setCurrentTab,
  tabs,
}: Readonly<TabsProps>) {
  return (
    <div
      className={classNames(
        "w-200 border-r-2 border-grey-500 h-dvh w-40 min-w-40 p-4",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={classNames(
            currentTab === tab.value && "font-bold",
            "underline cursor-pointer hover:underline"
          )}
          disabled={currentTab === tab.value}
          onClick={() => setCurrentTab(tab.value)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
