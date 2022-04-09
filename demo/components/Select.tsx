import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import cx from "classnames";
import React from "react";
import Button from "../components/shared/Button";

type Props = {};

const Select = (props: Props) => {
  return (
    <SelectPrimitive.Root defaultValue="blueberry">
      <SelectPrimitive.Trigger asChild aria-label="Food">
        <Button>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="ml-2">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
          <SelectPrimitive.Group>
            {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map(
              (f, i) => (
                <SelectPrimitive.Item
                  disabled={f === "Grapes"}
                  key={`${f}-${i}`}
                  value={f.toLowerCase()}
                  className={cx(
                    "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
                    "radix-disabled:opacity-50",
                    "focus:outline-none select-none"
                  )}
                >
                  <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                    <CheckIcon />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              )
            )}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

export default Select;
