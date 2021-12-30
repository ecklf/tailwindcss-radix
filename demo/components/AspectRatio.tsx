import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import cx from "classnames";
import React, { Fragment } from "react";

interface Props {}

const AspectRatio = (props: Props) => {
  return (
    <Fragment>
      <AspectRatioPrimitive.Root
        ratio={16 / 9}
        className="relative w-full h-full overflow-hidden rounded-lg shadow-md group"
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h3 className="text-3xl font-black text-transparent uppercase duration-300 ease-in-out select-none sm:text-4xl bg-clip-text bg-gradient-to-r group-hover:opacity-0 from-green-400 to-blue-500">
            Vancouver
          </h3>
        </div>
        <div
          className={cx(
            "absolute inset-0 object-cover bg-gray-600 group-hover:bg-gray-500",
            "transition-colors duration-300 ease-in-out"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1609825488888-3a766db05542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt="Vancouver by Matt Wang"
            className="w-full h-full mix-blend-overlay"
          />
        </div>
      </AspectRatioPrimitive.Root>
    </Fragment>
  );
};

export default AspectRatio;
