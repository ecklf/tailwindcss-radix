import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import cx from "classnames";
import React from "react";

interface Props {}

const Tooltip = (props: Props) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger
          className={cx(
            "radix-state-instant-open:bg-gray-900 radix-state-delayed-open:bg-gray-900 group",
            "inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-md select-none",
            "focus:outline-none focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75"
          )}
        >
          Hover me
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          className={cx(
            "radix-side-top:animate-slide-down-fade",
            "radix-side-right:animate-slide-left-fade",
            "radix-side-bottom:animate-slide-up-fade",
            "radix-side-left:animate-slide-right-fade",
            "dark:bg-gray-800 px-4 py-2 rounded-md"
          )}
        >
          <TooltipPrimitive.Arrow className="fill-current dark:text-gray-800" />
          <span className="block text-xs dark:text-gray-300">
            Sorry, but our princess is in another castle
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
