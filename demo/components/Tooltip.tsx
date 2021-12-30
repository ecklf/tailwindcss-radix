import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import cx from "classnames";
import React from "react";
import Button from "./shared/Button";

interface Props {}

const Tooltip = (props: Props) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <Button>Hover</Button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          className={cx(
            "radix-side-top:animate-slide-down-fade",
            "radix-side-right:animate-slide-left-fade",
            "radix-side-bottom:animate-slide-up-fade",
            "radix-side-left:animate-slide-right-fade",
            "inline-flex items-center px-4 py-2.5 rounded-md",
            "bg-white dark:bg-gray-800"
          )}
        >
          <TooltipPrimitive.Arrow className="text-white fill-current dark:text-gray-800" />
          <span className="block text-xs leading-none text-gray-700 dark:text-gray-100">
            Sorry, but our princess is in another castle
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
