import { ChevronDownIcon } from "@heroicons/react/solid";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
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
  TransparencyGridIcon
} from "@radix-ui/react-icons";
import cx from "classnames";
import Head from "next/head";
import React, { ReactNode, useState } from "react";

interface RadixMenuItem {
  label: string;
  shortcut?: string;
  icon?: ReactNode;
}

interface People {
  name: string;
  url?: string;
}

const generalMenuItems: RadixMenuItem[] = [
  {
    label: "New File",
    icon: <FileIcon className="w-4 h-4 mr-2" />,
    shortcut: "⌘+N",
  },
  {
    label: "Settings",
    icon: <MixerHorizontalIcon className="w-4 h-4 mr-2" />,
    shortcut: "⌘+,",
  },
];

const regionToolMenuItems: RadixMenuItem[] = [
  {
    label: "Frame",
    icon: <FrameIcon className="w-4 h-4 mr-2" />,
    shortcut: "⌘+F",
  },
  {
    label: "Crop",
    icon: <CropIcon className="w-4 h-4 mr-2" />,
    shortcut: "⌘+S",
  },
];

const people: People[] = [
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

export default function Home() {
  const [showGrid, setShowGrid] = useState(false);
  const [showUi, setShowUi] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Head>
        <title>Tailwind Radix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        {/* <Accordion.Root type="multiple">
          <Accordion.Item value="item-1">
            <Accordion.Header>
              <Accordion.Trigger className="group">
                <div className="flex items-center">
                  Item 1
                  <ChevronDownIcon className="w-5 h-5 ml-2 transform group-state-open:rotate-180" />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>Content 1</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Header>
              <Accordion.Trigger className="group">
                <div className="flex items-center">
                  Item 2
                  <ChevronDownIcon className="w-5 h-5 ml-2 transform group-state-open:rotate-180" />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>Content 2</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root> */}

        <div className="relative inline-block text-left">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              className={cx(
                "rdx-state-open:bg-gray-800 group",
                "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              )}
            >
              Dropdown
              <ChevronDownIcon
                className={cx(
                  "group-rdx-state-open:rotate-180 transform duration-300 ease-in-out",
                  "w-5 h-5 ml-2 -mr-1 text-white"
                )}
                aria-hidden="true"
              />
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
              align="end"
              sideOffset={10}
              className={cx(
                " rdx-side-bottom:animate-slide-down rdx-side-top:animate-slide-up",
                "w-56 px-1 py-1 bg-white rounded-lg shadow-md"
              )}
            >
              {generalMenuItems.map(({ label, icon, shortcut }, i) => (
                <DropdownMenu.Item
                  key={`${label}-${i}`}
                  className="flex items-center px-2 py-2 text-sm text-gray-700 bg-white rounded-md outline-none cursor-default select-none focus:bg-gray-800 focus:text-white group"
                >
                  {icon}
                  <span className="flex-grow">{label}</span>
                  {shortcut && <span>{shortcut}</span>}
                </DropdownMenu.Item>
              ))}

              <DropdownMenu.Separator className="h-px my-1 bg-gray-200" />

              <DropdownMenu.CheckboxItem
                checked={showGrid}
                onCheckedChange={setShowGrid}
                className="flex items-center w-full px-2 py-2 text-sm text-gray-700 rounded-md outline-none cursor-default select-none focus:bg-gray-800 focus:text-white group"
              >
                {showGrid ? (
                  <GridIcon className="w-4 h-4 mr-2" />
                ) : (
                  <TransparencyGridIcon className="h-4 mr-2 w-h4" />
                )}
                <span className="flex-grow">Show Grid</span>
                <DropdownMenu.ItemIndicator>
                  <CheckIcon className="w-4 h-4" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.CheckboxItem
                checked={showUi}
                onCheckedChange={setShowUi}
                className="flex items-center w-full px-2 py-2 text-sm text-gray-700 rounded-md outline-none cursor-default select-none focus:bg-gray-800 focus:text-white group"
              >
                {showUi ? (
                  <EyeOpenIcon className="w-4 h-4 mr-2" />
                ) : (
                  <EyeClosedIcon className="w-4 h-4 mr-2" />
                )}
                <span className="flex-grow">Show UI</span>
                <DropdownMenu.ItemIndicator>
                  <CheckIcon className="w-4 h-4" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Separator className="h-px my-1 bg-gray-200" />

              <DropdownMenu.Label className="px-2 py-2 text-xs text-gray-600 select-none">
                Region Tools
              </DropdownMenu.Label>

              {regionToolMenuItems.map(({ label, icon, shortcut }, i) => (
                <DropdownMenu.Item
                  key={`${label}-${i}`}
                  className="flex items-center px-2 py-2 text-sm text-gray-700 bg-white rounded-md outline-none cursor-default select-none focus:bg-gray-800 focus:text-white group"
                >
                  {icon}
                  <span className="flex-grow">{label}</span>
                  {shortcut && <span>{shortcut}</span>}
                </DropdownMenu.Item>
              ))}

              <DropdownMenu.Separator className="h-px my-1 bg-gray-200" />

              <DropdownMenu.Root>
                <DropdownMenu.TriggerItem className="flex items-center w-full px-2 py-2 text-sm text-gray-700 rounded-md outline-none cursor-default select-none focus:bg-gray-800 focus:text-white group">
                  <Link2Icon className="w-4 h-4 mr-2" />
                  <span className="flex-grow">Share</span>
                  <CaretRightIcon className="w-4 h-4" />
                </DropdownMenu.TriggerItem>
                <DropdownMenu.Content
                  className={cx(
                    "rdx-side-right:animate-scale-in origin-rdx-dropdown",
                    "px-1 py-1 w-full bg-white text-sm rounded-md shadow-md"
                  )}
                >
                  {people.map(({ name, url }, i) => (
                    <DropdownMenu.Item
                      key={`${name}-${i}`}
                      className="flex items-center w-32 px-2 py-2 text-sm text-gray-700 bg-white rounded-md outline-none cursor-default select-none focus:bg-gray-800 focus:text-white group"
                    >
                      {url ? (
                        <img
                          className="w-6 h-6 mr-2.5 rounded-full"
                          src={url}
                        />
                      ) : (
                        <PersonIcon className="w-6 h-6 mr-2.5" />
                      )}
                      <span>{name}</span>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </main>
    </div>
  );
}
