import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import cx from "classnames";
import React, { Fragment, useState } from "react";
import Button from "./shared/Button";

interface Props {}

const Dialog = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <Button>Click</Button>
      </DialogPrimitive.Trigger>
      <Transition.Root show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPrimitive.Overlay
            forceMount
            className="fixed inset-0 z-20 bg-black/50"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPrimitive.Content
            forceMount
            className={cx(
              "fixed z-50",
              "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
              "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
              "bg-white dark:bg-gray-800",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Edit profile
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogPrimitive.Description>
            <form className="mt-2 space-y-2">
              <fieldset>
                {/* <legend>Choose your favorite monster</legend> */}
                <label
                  htmlFor="firstName"
                  className="text-xs font-medium text-gray-700 dark:text-gray-400"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Tim"
                  autoComplete="given-name"
                  className={cx(
                    "mt-1 block w-full rounded-md",
                    "text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
                    "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                />
              </fieldset>
              <fieldset>
                <label
                  htmlFor="familyName"
                  className="text-xs font-medium text-gray-700 dark:text-gray-400"
                >
                  Family Name
                </label>
                <input
                  id="familyName"
                  type="text"
                  placeholder="Cook"
                  autoComplete="family-name"
                  className={cx(
                    "mt-1 block w-full rounded-md",
                    "text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
                    "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                />
              </fieldset>
            </form>

            <div className="mt-4 flex justify-end">
              <DialogPrimitive.Close
                className={cx(
                  "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                  "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                  "border border-transparent",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              >
                Save
              </DialogPrimitive.Close>
            </div>

            <DialogPrimitive.Close
              className={cx(
                "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </Transition.Child>
      </Transition.Root>
    </DialogPrimitive.Root>
  );
};

export default Dialog;
