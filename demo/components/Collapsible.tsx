import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { PlayIcon, Share2Icon, TriangleRightIcon } from "@radix-ui/react-icons";
import cx from "classnames";
import React from "react";

interface Props {}

const Collapsible = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <CollapsiblePrimitive.Trigger
        className={cx(
          "group w-full flex items-center justify-between px-4 py-2 text-left rounded-md text-sm font-medium select-none",
          "text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-800",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <div>My Playlists</div>
        <TriangleRightIcon className="duration-300 ease-in-out transform group-radix-state-open:rotate-90" />
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content className="flex flex-col mt-4 space-y-4">
        {["80s Synthwave", "Maximale Konzentration", "高人氣金曲"].map(
          (title, i) => (
            <div
              key={`collapsible-${title}-${i}`}
              className={cx(
                "group",
                "flex items-center justify-between ml-12 px-4 py-2 text-left rounded-md text-sm font-medium select-none",
                "text-gray-900 bg-white hover:bg-gray-50 dark:text-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900"
              )}
            >
              {title}
              <div className="items-center hidden space-x-3 group-hover:flex">
                <Share2Icon className="text-gray-500 cursor-pointer hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
                <PlayIcon className="text-gray-500 cursor-pointer hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
              </div>
            </div>
          )
        )}
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
};

export default Collapsible;
