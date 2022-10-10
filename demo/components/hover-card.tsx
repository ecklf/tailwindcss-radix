import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import cx from "classnames";
import React from "react";

const TailwindLogo = () => (
  <svg
    className="h-7 w-7 shrink-0"
    viewBox="0 0 99 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.388 0c-13.171 0-21.4 6.546-24.695 19.637 4.94-6.545 10.701-9 17.286-7.364 3.757.933 6.443 3.643 9.414 6.643C56.236 23.8 61.84 29.454 74.08 29.454c13.169 0 21.4-6.546 24.693-19.635-4.938 6.545-10.7 9-17.284 7.362-3.759-.933-6.445-3.642-9.416-6.64C67.23 5.65 61.627 0 49.387 0ZM24.693 29.454C11.523 29.454 3.293 36 0 49.092c4.94-6.546 10.701-9 17.284-7.365 3.759.933 6.445 3.643 9.416 6.643 4.843 4.885 10.446 10.538 22.688 10.538 13.169 0 21.4-6.544 24.693-19.635-4.94 6.546-10.702 9-17.286 7.364-3.757-.934-6.443-3.644-9.414-6.642-4.843-4.885-10.448-10.54-22.688-10.54Z"
      fill="#38BDF8"
    />
  </svg>
);

interface Props {}

const HoverCard = (props: Props) => {
  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        <div
          className={cx(
            "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-2.5 dark:bg-gray-900"
          )}
        >
          <TailwindLogo />
        </div>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content
        align="center"
        sideOffset={4}
        className={cx(
          " radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
          "max-w-md rounded-lg p-4 md:w-full",
          "bg-white dark:bg-gray-800",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <HoverCardPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />

        <div className="flex h-full w-full space-x-4">
          <div
            className={cx(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-inner bg-gray-50/60 p-2.5 dark:bg-gray-900"
            )}
          >
            <TailwindLogo />
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Tailwind CSS
            </h3>

            <p className="mt-1 text-sm font-normal text-gray-700 dark:text-gray-400">
              A utility-first CSS framework for rapidly building custom user
              interfaces.
            </p>
          </div>
        </div>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};

export default HoverCard;
