import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as LabelPrimitive from "@radix-ui/react-label";
import cx from "classnames";
import React from "react";

interface Props {}

const Checkbox = (props: Props) => {
  return (
    <form className="flex items-center">
      <CheckboxPrimitive.Root
        id="c1"
        defaultChecked
        className={cx(
          "flex items-center justify-center w-5 h-5 rounded dark:bg-gray-800",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="self-center w-4 h-4 dark:text-gray-100" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <LabelPrimitive.Label
        htmlFor="c1"
        className="ml-2.5 text-sm font-medium select-none dark:text-gray-100"
      >
        Accept terms and conditions
      </LabelPrimitive.Label>
    </form>
  );
};

export default Checkbox;
