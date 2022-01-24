import * as TabsPrimitive from "@radix-ui/react-tabs";
import cx from "classnames";
import React from "react";

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "Inbox",
    value: "tab1",
  },
  {
    title: "Today",
    value: "tab2",
  },

  {
    title: "Upcoming",
    value: "tab3",
  },
];

interface Props {}

const Tabs = (props: Props) => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List
        className={cx("flex w-full rounded-t-lg bg-white dark:bg-gray-800")}
      >
        {tabs.map(({ title, value }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={cx(
              "group",
              "first:rounded-tl-lg last:rounded-tr-lg",
              "border-b first:border-r last:border-l",
              "border-gray-300 dark:border-gray-600",
              "radix-state-active:border-b-gray-700 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-gray-50 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800",
              "flex-1 px-3 py-2.5",
              "focus:radix-state-active:border-b-red",
              "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <span
              className={cx(
                "text-sm font-medium",
                "text-gray-700 dark:text-gray-100"
              )}
            >
              {title}
            </span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({ value }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className={cx("rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800")}
        >
          <span className="text-sm text-gray-700 dark:text-gray-100">
            {
              {
                tab1: "Your inbox is empty",
                tab2: "Make some coffee",
                tab3: "Order more coffee",
              }[value]
            }
          </span>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export default Tabs;
