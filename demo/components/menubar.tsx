import * as MenubarPrimitive from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

type MenubarSeparatorProps = Omit<
  MenubarPrimitive.MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>,
  "className"
>;

const MenubarSeparator = ({ children, ...rest }: MenubarSeparatorProps) => (
  <MenubarPrimitive.Separator
    className="my-1 h-px mx-1.5 bg-gray-200 dark:bg-gray-700"
    {...rest}
  >
    {children}
  </MenubarPrimitive.Separator>
);

type MenubarTriggerProps = Omit<
  MenubarPrimitive.MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>,
  "className"
>;

const MenubarTrigger = ({ children, ...rest }: MenubarTriggerProps) => (
  <MenubarPrimitive.Trigger
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "radix-state-open:bg-gray-100 dark:radix-state-open:bg-gray-900",
      "px-4 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    {...rest}
  >
    {children}
  </MenubarPrimitive.Trigger>
);

type MenubarSubTriggerProps = Omit<
  MenubarPrimitive.MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement>,
  "className"
>;

const MenubarSubTrigger = ({ children, ...rest }: MenubarSubTriggerProps) => (
  <MenubarPrimitive.SubTrigger
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "px-3 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    {...rest}
  >
    <div className="w-full flex justify-between items-center">
      {children}
      <ChevronRightIcon className="ml-4 -mr-1 text-gray-700 dark:text-gray-100 font-medium" />
    </div>
  </MenubarPrimitive.SubTrigger>
);

type MenubarItemProps = Omit<
  MenubarPrimitive.MenubarItemProps &
    React.RefAttributes<HTMLDivElement> & { shortcut?: string },
  "className"
>;

const MenubarItem = ({ children, shortcut, ...rest }: MenubarItemProps) => (
  <MenubarPrimitive.Item
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "w-full flex items-center justify-between",
      "px-3 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    {...rest}
  >
    <div className="w-full flex justify-between items-center">
      {children}
      {shortcut && (
        <span className="ml-4 text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900">
          {shortcut}
        </span>
      )}
    </div>
  </MenubarPrimitive.Item>
);

type MenubarCheckboxItemProps = Omit<
  MenubarPrimitive.MenubarCheckboxItemProps &
    React.RefAttributes<HTMLDivElement>,
  "className"
>;

const MenubarCheckboxItem = ({
  children,
  ...rest
}: MenubarCheckboxItemProps) => (
  <MenubarPrimitive.CheckboxItem
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "w-full flex items-center justify-between",
      "px-3 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    {...rest}
  >
    <div className="flex items-center">
      <div className="relative h-3.5 w-3.5 -ml-1">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="h-3.5 w-3.5 -ml-0.5 mr-1.5" />
        </MenubarPrimitive.ItemIndicator>
      </div>
      <div className="ml-1">{children}</div>
    </div>
  </MenubarPrimitive.CheckboxItem>
);

type MenubarRadioItemProps = Omit<
  MenubarPrimitive.MenubarRadioItemProps & React.RefAttributes<HTMLDivElement>,
  "className"
>;

const MenubarRadioItem = ({ children, ...rest }: MenubarRadioItemProps) => (
  <MenubarPrimitive.RadioItem
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "w-full flex items-center justify-between",
      "px-3 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    {...rest}
  >
    <div className="flex items-center">
      <div className="relative h-3.5 w-3.5 -ml-1">
        <MenubarPrimitive.ItemIndicator>
          <DotFilledIcon className="absolute inset-0" />
        </MenubarPrimitive.ItemIndicator>
      </div>
      <div className="ml-1">{children}</div>
    </div>
  </MenubarPrimitive.RadioItem>
);

type MenubarProps = {};

const RADIO_ITEMS = ["rauchg", "steventey", "0xca0a"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const Menubar = (props: MenubarProps) => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  const contentClasses = "bg-white dark:bg-gray-800 rounded-md p-1";

  return (
    <MenubarPrimitive.Root className="relative flex flex-row rounded-lg bg-white dark:bg-gray-800 -space-x-1">
      <MenubarPrimitive.Menu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarPrimitive.Portal>
          <MenubarPrimitive.Content
            className={contentClasses}
            align="start"
            sideOffset={3}
            alignOffset={0}
          >
            <MenubarItem shortcut="⌘ T">New Tab</MenubarItem>
            <MenubarItem shortcut="⌘ N">New Window</MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarPrimitive.Sub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarPrimitive.Portal>
                <MenubarPrimitive.SubContent
                  className={contentClasses}
                  sideOffset={0}
                  alignOffset={-4}
                >
                  <MenubarItem>Email Link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarPrimitive.SubContent>
              </MenubarPrimitive.Portal>
            </MenubarPrimitive.Sub>

            <MenubarSeparator />
            <MenubarItem shortcut="⌘ P">Print…</MenubarItem>
          </MenubarPrimitive.Content>
        </MenubarPrimitive.Portal>
      </MenubarPrimitive.Menu>

      <MenubarPrimitive.Menu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarPrimitive.Portal>
          <MenubarPrimitive.Content
            className={contentClasses}
            align="start"
            sideOffset={3}
            alignOffset={0}
          >
            <MenubarItem shortcut="⌘ Z">Undo</MenubarItem>
            <MenubarItem shortcut="⇧ ⌘ Z">Redo</MenubarItem>
            <MenubarSeparator />
            <MenubarPrimitive.Sub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>

              <MenubarPrimitive.Portal>
                <MenubarPrimitive.SubContent
                  className={contentClasses}
                  sideOffset={0}
                  alignOffset={-4}
                >
                  <MenubarItem>Search the web…</MenubarItem>

                  <MenubarSeparator />
                  <MenubarItem>Find…</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarPrimitive.SubContent>
              </MenubarPrimitive.Portal>
            </MenubarPrimitive.Sub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarPrimitive.Content>
        </MenubarPrimitive.Portal>
      </MenubarPrimitive.Menu>

      <MenubarPrimitive.Menu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarPrimitive.Portal>
          <MenubarPrimitive.Content
            className={contentClasses}
            align="start"
            sideOffset={3}
            alignOffset={-14}
          >
            {CHECK_ITEMS.map((item) => (
              <MenubarCheckboxItem
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                {item}
              </MenubarCheckboxItem>
            ))}

            <MenubarSeparator />
            <MenubarItem shortcut="⌘ R">Reload</MenubarItem>
            <MenubarItem shortcut="⇧ ⌘ R">Force Reload</MenubarItem>

            <MenubarSeparator />
            <MenubarItem>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Hide Sidebar</MenubarItem>
          </MenubarPrimitive.Content>
        </MenubarPrimitive.Portal>
      </MenubarPrimitive.Menu>

      <MenubarPrimitive.Menu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarPrimitive.Portal>
          <MenubarPrimitive.Content
            className={contentClasses}
            align="start"
            sideOffset={3}
            alignOffset={-14}
          >
            <MenubarPrimitive.RadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {RADIO_ITEMS.map((item) => (
                <MenubarRadioItem key={item} value={item}>
                  {item}
                </MenubarRadioItem>
              ))}

              <MenubarSeparator />
              <MenubarItem>Edit…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Add Profile…</MenubarItem>
            </MenubarPrimitive.RadioGroup>
          </MenubarPrimitive.Content>
        </MenubarPrimitive.Portal>
      </MenubarPrimitive.Menu>
    </MenubarPrimitive.Root>
  );
};

export { Menubar };
