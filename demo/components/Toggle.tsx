import * as TogglePrimitive from "@radix-ui/react-toggle";
import cx from "classnames";
import React from "react";

interface Props {}

const Toggle = (props: Props) => {
  return (
    <TogglePrimitive.Root
      className={cx(
        "group",
        "radix-state-on:bg-purple-600",
        "radix-state-off:bg-gray-200 dark:radix-state-off:bg-gray-800",
        "relative inline-flex flex-shrink-0 h-[24px] w-[44px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      )}
    >
      <span
        className={cx(
          "group-radix-state-on:translate-x-5",
          "group-radix-state-off:translate-x-0",
          "pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
        )}
      />
    </TogglePrimitive.Root>
  );
};

export default Toggle;
