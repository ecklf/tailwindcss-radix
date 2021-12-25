import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  CaretRightIcon,
  CheckIcon,
  CropIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  FileIcon,
  FrameIcon,
  GridIcon,
  Link2Icon,
  MixerHorizontalIcon,
  PersonIcon,
  TransparencyGridIcon,
} from "@radix-ui/react-icons";
import cx from "classnames";
import React, { ReactNode, useState } from "react";

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

const DropdownMenu = (props: Props) => {
  const [showGrid, setShowGrid] = useState(false);
  const [showUi, setShowUi] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger
          className={cx(
            "radix-state-open:bg-gray-900 group",
            "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-md select-none",
            "focus:outline-none focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75"
          )}
        >
          Actions
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={10}
          className={cx(
            " radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up",
            "w-48 md:w-56 px-1.5 py-1 bg-gray-800 rounded-lg shadow-md"
          )}
        >
          {generalMenuItems.map(({ label, icon, shortcut }, i) => (
            <DropdownMenuPrimitive.Item
              key={`${label}-${i}`}
              className="flex items-center px-2 py-2 text-xs text-gray-500 rounded-md outline-none cursor-default select-none focus:bg-gray-900 group"
            >
              {icon}
              <span className="flex-grow text-gray-300">{label}</span>
              {shortcut && <span className="text-xs">{shortcut}</span>}
            </DropdownMenuPrimitive.Item>
          ))}

          <DropdownMenuPrimitive.Separator className="h-px my-1 bg-gray-700" />

          <DropdownMenuPrimitive.CheckboxItem
            checked={showGrid}
            onCheckedChange={setShowGrid}
            className="flex items-center w-full px-2 py-2 text-xs text-gray-500 rounded-md outline-none cursor-default select-none focus:bg-gray-900 group"
          >
            {showGrid ? (
              <GridIcon className="w-4 h-4 mr-2" />
            ) : (
              <TransparencyGridIcon className="w-3.5 h-3.5 mr-2 text-gray-300" />
            )}
            <span className="flex-grow text-gray-300">Show Grid</span>
            <DropdownMenuPrimitive.ItemIndicator>
              <CheckIcon className="w-3.5 h-3.5" />
            </DropdownMenuPrimitive.ItemIndicator>
          </DropdownMenuPrimitive.CheckboxItem>

          <DropdownMenuPrimitive.CheckboxItem
            checked={showUi}
            onCheckedChange={setShowUi}
            className="flex items-center w-full px-2 py-2 text-xs text-gray-300 rounded-md outline-none cursor-default select-none focus:bg-gray-900 group"
          >
            {showUi ? (
              <EyeOpenIcon className="w-3.5 h-3.5 mr-2 text-gray-500" />
            ) : (
              <EyeClosedIcon className="w-3.5 h-3.5 mr-2 text-gray-500" />
            )}
            <span className="flex-grow">Show UI</span>
            <DropdownMenuPrimitive.ItemIndicator>
              <CheckIcon className="w-3.5 h-3.5" />
            </DropdownMenuPrimitive.ItemIndicator>
          </DropdownMenuPrimitive.CheckboxItem>

          <DropdownMenuPrimitive.Separator className="h-px my-1 bg-gray-700" />

          <DropdownMenuPrimitive.Label className="px-2 py-2 text-xs text-gray-200 select-none">
            Region Tools
          </DropdownMenuPrimitive.Label>

          {regionToolMenuItems.map(({ label, icon, shortcut }, i) => (
            <DropdownMenuPrimitive.Item
              key={`${label}-${i}`}
              className="flex items-center px-2 py-2 text-xs text-gray-500 rounded-md outline-none cursor-default select-none focus:bg-gray-900 fgroup"
            >
              {icon}
              <span className="flex-grow text-gray-300">{label}</span>
              {shortcut && <span className="text-xs">{shortcut}</span>}
            </DropdownMenuPrimitive.Item>
          ))}

          <DropdownMenuPrimitive.Separator className="h-px my-1 bg-gray-700" />

          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.TriggerItem className="flex items-center w-full px-2 py-2 text-xs text-gray-500 rounded-md outline-none cursor-default select-none focus:bg-gray-900 group">
              <Link2Icon className="w-3.5 h-3.5 mr-2" />
              <span className="flex-grow text-gray-300">Share</span>
              <CaretRightIcon className="w-3.5 h-3.5" />
            </DropdownMenuPrimitive.TriggerItem>
            <DropdownMenuPrimitive.Content
              className={cx(
                "radix-side-right:animate-scale-in origin-radix-dropdown-menu",
                "px-1 py-1 w-full bg-gray-800 text-xs rounded-md shadow-md"
              )}
            >
              {users.map(({ name, url }, i) => (
                <DropdownMenuPrimitive.Item
                  key={`${name}-${i}`}
                  className="flex items-center px-2 py-2 text-xs text-gray-500 rounded-md outline-none cursor-default select-none w-28 md:w-32 focus:bg-gray-900 group"
                >
                  {url ? (
                    <img className="w-6 h-6 mr-2.5 rounded-full" src={url} />
                  ) : (
                    <PersonIcon className="w-6 h-6 mr-2.5" />
                  )}
                  <span className="text-gray-300">{name}</span>
                </DropdownMenuPrimitive.Item>
              ))}
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Root>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default DropdownMenu;
