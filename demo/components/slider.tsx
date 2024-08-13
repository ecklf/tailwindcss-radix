import * as SliderPrimitive from "@radix-ui/react-slider";
import { clsx } from "clsx";
import React from "react";

const Slider = () => {
  return (
    <SliderPrimitive.Root
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="value"
      className="relative flex h-5 w-64 touch-none items-center"
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-white dark:bg-gray-800">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-purple-600 dark:bg-white" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={clsx(
          "block h-5 w-5 rounded-full bg-purple-600 dark:bg-white",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      />
    </SliderPrimitive.Root>
  );
};

export { Slider };
