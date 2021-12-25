import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import cx from "classnames";
import React from "react";

interface Props {}

const Toggle = (props: Props) => {
  return (
    <TogglePrimitive.Root
      className={cx(
        "group",
        "radix-state-on:bg-gray-900",
        "radix-state-off:bg-gray-200 dark:radix-state-off:bg-gray-800",
        "relative inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-md select-none",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      )}
    >
      <StarIcon className="group-radix-state-on:hidden" />
      <StarFilledIcon className="text-yellow-400 group-radix-state-off:hidden" />
      <span className="ml-1.5 leading-5 group-radix-state-on:hidden">Star</span>
      <span className="ml-1.5 leading-5 group-radix-state-off:hidden">
        Starred
      </span>
    </TogglePrimitive.Root>
  );
};

export default Toggle;
