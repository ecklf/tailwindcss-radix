import { Cross1Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import cx from "classnames";
import React from "react";
import Button from "./shared/Button";

interface Props {}

const items = [
  {
    id: "width",
    label: "Width",
    defaultValue: "100%",
  },
  {
    id: "max-width",
    label: "Max. width",
    defaultValue: "300px",
  },
  {
    id: "height",
    label: "Height",
    defaultValue: "25px",
  },
  {
    id: "max-height",
    label: "Max. height",
    defaultValue: "none",
  },
];

const Popover = (props: Props) => {
  return (
    <div className="relative inline-block text-left">
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>
          <Button>Click</Button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content
          align="center"
          sideOffset={4}
          className={cx(
            "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
            "w-48 rounded-lg p-4 shadow-md md:w-56",
            "bg-white dark:bg-gray-800"
          )}
        >
          <PopoverPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Dimensions
          </h3>

          <form className="mt-4 space-y-2">
            {items.map(({ id, label, defaultValue }) => {
              return (
                <fieldset
                  key={`popover-items-${id}`}
                  className="flex items-center"
                >
                  {/* <legend>Choose your favorite monster</legend> */}
                  <label
                    htmlFor={id}
                    className="shrink-0 grow text-xs font-medium text-gray-700 dark:text-gray-400"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type="text"
                    defaultValue={defaultValue}
                    autoComplete="given-name"
                    className={cx(
                      "block w-1/2 rounded-md",
                      "text-xs text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
                      "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    )}
                  />
                </fieldset>
              );
            })}
          </form>

          <PopoverPrimitive.Close
            className={cx(
              "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
          </PopoverPrimitive.Close>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </div>
  );
};

export default Popover;
