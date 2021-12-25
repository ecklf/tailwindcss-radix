import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import cx from "classnames";
import React, { useState } from "react";

interface Props {}

const Toggle = (props: Props) => {
  const [starred, setStarred] = useState(false);

  return (
    <TogglePrimitive.Root
      defaultPressed={starred}
      onPressedChange={setStarred}
      className={cx(
        "radix-state-on:bg-gray-900",
        "radix-state-off:bg-gray-200 dark:radix-state-off:bg-gray-800",
        "relative inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-md select-none",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      )}
    >
      {starred ? <StarFilledIcon className="text-yellow-400" /> : <StarIcon />}
      <span className="ml-2 leading-5">{starred ? "Starred" : "Star"}</span>
    </TogglePrimitive.Root>
  );
};

export default Toggle;
