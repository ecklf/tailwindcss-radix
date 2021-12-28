import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  CropIcon,
  FileIcon,
  FrameIcon,
  Half2Icon,
  MixerHorizontalIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import cx from "classnames";
import React, { ReactNode, useEffect, useState } from "react";

interface RadixMenuItem {
  label: string;
  shortcut?: string;
  icon?: ReactNode;
}

interface User {
  name: string;
  url?: string;
}

const generalMenuItems: RadixMenuItem[] = [
  {
    label: "New File",
    icon: <FileIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: "⌘+N",
  },
  {
    label: "Settings",
    icon: <MixerHorizontalIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: "⌘+,",
  },
];

const regionToolMenuItems: RadixMenuItem[] = [
  {
    label: "Frame",
    icon: <FrameIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: "⌘+F",
  },
  {
    label: "Crop",
    icon: <CropIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: "⌘+S",
  },
];

const users: User[] = [
  {
    name: "Adam",
    url: "https://github.com/adamwathan.png",
  },
  {
    name: "Steve",
    url: "https://github.com/steveschoger.png",
  },
  {
    name: "Robin",
    url: "https://github.com/robinmalfait.png",
  },
];

interface Props {}

const themes = [
  {
    key: "light",
    label: "Light",
    icon: <SunIcon />,
  },
  {
    key: "dark",
    label: "Dark",
    icon: <MoonIcon />,
  },

  {
    key: "system",
    label: "System",
    icon: <Half2Icon />,
  },
];

const ThemeSwitcher = (props: Props) => {
  const [preferredTheme, setPreferredTheme] = useState<null | string>(null);

  useEffect(() => {
    try {
      let found = localStorage.getItem("theme");
      setPreferredTheme(found);
    } catch (error) {}
  }, []);

  useEffect(() => {
    const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (e: MediaQueryListEvent) => {
      setPreferredTheme("system");
    };
    prefersDarkQuery.addEventListener("change", updateTheme);

    return () => {
      prefersDarkQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger
          className={cx(
            "inline-flex justify-center px-2.5 py-2 text-sm font-medium rounded-md select-none",
            "text-gray-900 bg-white hover:bg-gray-50 dark:text-gray-100 dark:bg-gray-700 hover:dark:bg-gray-600",
            "border border-gray-300 dark:border-transparent",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        >
          {(function () {
            switch (preferredTheme) {
              case "light":
                return (
                  <SunIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                );
              case "dark":
                return (
                  <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                );
              default:
                return (
                  <Half2Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                );
            }
          })()}
          {/* {isDark ? "dark" : "light"} */}
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={5}
          className={cx(
            " radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up",
            "w-48 md:w-56 px-1.5 py-1 rounded-lg shadow-md",
            "bg-gray-50 dark:bg-gray-700"
          )}
        >
          {themes.map(({ key, label, icon }, i) => {
            return (
              <DropdownMenuPrimitive.Item
                key={`theme-${i}`}
                className={cx(
                  "flex items-center w-full px-2 py-2 text-xs rounded-md outline-none cursor-default select-none",
                  "text-gray-500 focus:bg-gray-200 dark:text-gray-400 dark:focus:bg-gray-800"
                )}
                onClick={() => {
                  (window as any).__setPreferredTheme(key);
                  setPreferredTheme(key);
                }}
              >
                {React.cloneElement(icon, {
                  className: "w-5 h-5 mr-2 text-gray-700 dark:text-gray-300",
                })}
                <span className="flex-grow text-gray-700 dark:text-gray-300">
                  {label}
                </span>
              </DropdownMenuPrimitive.Item>
            );
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default ThemeSwitcher;
