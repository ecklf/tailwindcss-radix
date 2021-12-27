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
        "group radix-state-on:bg-gray-100 dark:radix-state-on:bg-gray-900",
        "inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md select-none",
        "bg-white text-gray-900 dark:text-gray-100 dark:bg-gray-800",
        "focus:outline-none focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75"
      )}
    >
      {starred ? <StarFilledIcon className="text-yellow-400" /> : <StarIcon />}
      <span className="ml-2 leading-5">{starred ? "Starred" : "Star"}</span>
    </TogglePrimitive.Root>
  );
};

export default Toggle;
