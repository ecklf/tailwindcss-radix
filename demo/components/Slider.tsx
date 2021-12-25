import * as SliderPrimitive from "@radix-ui/react-slider";
import cx from "classnames";
import React from "react";

interface Props {}

const Slider = (props: Props) => {
  return (
    <SliderPrimitive.Root
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="value"
      className="relative flex items-center w-64 h-5 touch-none"
    >
      <SliderPrimitive.Track className="relative w-full h-1 rounded-full grow bg-gray-50 dark:bg-gray-800">
        <SliderPrimitive.Range className="absolute h-full bg-purple-700 rounded-full dark:bg-white" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cx(
          "block w-5 h-5 rounded-full bg-purple-700 dark:bg-white",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      />
    </SliderPrimitive.Root>
  );
};

export default Slider;
