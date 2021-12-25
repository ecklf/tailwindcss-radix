import * as SwitchPrimitive from "@radix-ui/react-switch";
import cx from "classnames";
import React from "react";

interface Props {}

const Switch = (props: Props) => {
  return (
    <SwitchPrimitive.Root
      className={cx(
        "group",
        "radix-state-checked:bg-purple-600",
        "radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-800",
        "relative inline-flex flex-shrink-0 h-[24px] w-[44px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      )}
    >
      <span
        className={cx(
          "group-radix-state-checked:translate-x-5",
          "group-radix-state-unchecked:translate-x-0",
          "pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
        )}
      />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
