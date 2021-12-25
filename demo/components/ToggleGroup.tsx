import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import cx from "classnames";
import React, { ReactElement } from "react";

interface ToggleItem {
  value: string;
  label: string;
  icon: ReactElement;
}

const settings: ToggleItem[] = [
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

interface Props {}

const ToggleGroup = (props: Props) => {
  return (
    <ToggleGroupPrimitive.Root type="multiple" aria-label="Font settings">
      {settings.map(({ value, label, icon }, i) => (
        <ToggleGroupPrimitive.Item
          key={`group-item-${value}-${label}`}
          value={value}
          aria-label={label}
          className={cx(
            "radix-state-on:dark:bg-gray-900",
            "px-2.5 py-2 dark:bg-gray-800",
            "first:rounded-l-md last:rounded-r-md",
            "border-y first:border-x last:border-x border-gray-700 radix-state-on:border-transparent",
            "focus:relative focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:z-20"
          )}
        >
          {React.cloneElement(icon, {
            className: "w-5 h-5 dark:text-gray-200",
          })}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
};

export default ToggleGroup;
