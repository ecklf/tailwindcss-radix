import {
  FontBoldIcon,
  FontItalicIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import cx from "classnames";
import React, { ReactElement } from "react";

interface ToggleItem {
  value: string;
  label: string;
  icon: ReactElement;
}

const fontSettings: ToggleItem[] = [
  {
    value: "bold",
    label: "Font bold",
    icon: <FontBoldIcon />,
  },
  {
    value: "italic",
    label: "Font italic",
    icon: <FontItalicIcon />,
  },
  {
    value: "underline",
    label: "Underline",
    icon: <UnderlineIcon />,
  },
];

const textSettings: ToggleItem[] = [
  {
    value: "left",
    label: "Text left",
    icon: <TextAlignLeftIcon />,
  },
  {
    value: "center",
    label: "Text center",
    icon: <TextAlignCenterIcon />,
  },
  {
    value: "right",
    label: "Text right",
    icon: <TextAlignRightIcon />,
  },
];

interface Props {}

const Toolbar = (props: Props) => {
  return (
    <ToolbarPrimitive.Root className="flex px-2.5 py-2 space-x-4 bg-gray-800 rounded-lg">
      <ToolbarPrimitive.ToggleGroup type="multiple" aria-label="Font settings">
        {fontSettings.map(({ value, label, icon }, i) => (
          <ToolbarPrimitive.ToggleItem
            key={`group-item-${value}-${label}`}
            value={value}
            aria-label={label}
            className={cx(
              "radix-state-on:dark:bg-gray-900",
              "px-2.5 py-2 dark:bg-gray-800",
              "first:rounded-l-md last:rounded-r-md",
              "border-y first:border-x last:border-x border-gray-600 radix-state-on:border-transparent",
              "focus:relative focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:z-20"
            )}
          >
            {React.cloneElement(icon, {
              className: "w-5 h-5 dark:text-gray-200",
            })}
          </ToolbarPrimitive.ToggleItem>
        ))}
      </ToolbarPrimitive.ToggleGroup>

      <ToolbarPrimitive.ToggleGroup
        type="single"
        defaultValue="center"
        aria-label="Text settings"
      >
        {textSettings.map(({ value, label, icon }, i) => (
          <ToolbarPrimitive.ToggleItem
            key={`group-item-${value}-${label}`}
            value={value}
            aria-label={label}
            className={cx(
              "radix-state-on:dark:bg-gray-900",
              "px-2.5 py-2 dark:bg-gray-800",
              "first:rounded-l-md last:rounded-r-md",
              "border-y first:border-x last:border-x border-gray-600 radix-state-on:border-transparent",
              "focus:relative focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:z-20"
            )}
          >
            {React.cloneElement(icon, {
              className: "w-5 h-5 dark:text-gray-300",
            })}
          </ToolbarPrimitive.ToggleItem>
        ))}
      </ToolbarPrimitive.ToggleGroup>

      <ToolbarPrimitive.Separator className="hidden xl:flex w-px h-auto mx-4 my-0.5 dark:bg-gray-600" />

      <span className="items-center hidden pr-2 xl:flex">
        <ToolbarPrimitive.Link
          className={cx(
            "text-sm text-gray-500 dark:text-gray-400",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:z-20"
          )}
          href="https://github.com/ecklf/tailwindcss-radix"
          target="_blank"
        >
          Edited 2 hours ago
        </ToolbarPrimitive.Link>
      </span>
    </ToolbarPrimitive.Root>
  );
};

export default Toolbar;
