import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import cx from "classnames";
import React from "react";

const TailwindLogo = () => (
  <svg
    className="shrink-0"
    viewBox="0 0 99 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.3877 0C36.2168 0 27.9871 6.54581 24.6929 19.6374C29.6323 13.0916 35.3942 10.6374 41.9787 12.2729C45.7355 13.2058 48.4219 15.9155 51.3929 18.9155C56.2355 23.8006 61.8406 29.4542 74.0807 29.4542C87.2497 29.4542 95.4813 22.9084 98.7736 9.81871C93.8361 16.3645 88.0742 18.8187 81.4897 17.1813C77.731 16.2484 75.0445 13.5387 72.0735 10.5406C67.231 5.65161 61.6277 0 49.3877 0ZM24.6929 29.4542C11.5239 29.4542 3.29226 36 0 49.0916C4.93935 42.5458 10.7013 40.0916 17.2839 41.7271C21.0426 42.66 23.729 45.3697 26.7 48.3697C31.5426 53.2548 37.1458 58.9084 49.3877 58.9084C62.5568 58.9084 70.7884 52.3645 74.0807 39.2729C69.1413 45.8187 63.3794 48.2729 56.7948 46.6374C53.0381 45.7026 50.3516 42.9929 47.3806 39.9948C42.5381 35.1097 36.9329 29.4542 24.6929 29.4542Z"
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
            "inline-flex items-center justify-center w-12 h-12 p-2.5 bg-white dark:bg-gray-900 rounded-full"
          )}
        >
          <TailwindLogo />
        </div>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content
        align="center"
        sideOffset={4}
        className={cx(
          " radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up",
          "md:w-full max-w-md rounded-lg p-4",
          "bg-white dark:bg-gray-800",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <HoverCardPrimitive.Arrow className="text-white fill-current dark:text-gray-800" />

        <div className="flex w-full h-full space-x-4">
          <div
            className={cx(
              "flex shrink-0 items-center justify-center w-12 h-12 p-2.5 bg-gray-100 dark:bg-gray-900 rounded-full"
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
