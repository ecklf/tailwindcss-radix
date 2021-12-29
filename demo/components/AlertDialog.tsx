import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import cx from "classnames";
import React, { Fragment, useState } from "react";

interface Props {}

const AlertDialog = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitive.Trigger
        className={cx(
          "group radix-state-open:bg-gray-100 dark:radix-state-open:bg-gray-900",
          "inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md select-none",
          "bg-white text-gray-900 dark:text-gray-100 dark:bg-gray-800",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        Alert Dialog
      </AlertDialogPrimitive.Trigger>
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
          <AlertDialogPrimitive.Overlay
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
          <AlertDialogPrimitive.Content
            forceMount
            className={cx(
              "fixed z-50",
              "w-[95vw] md:w-full max-w-md rounded-lg p-4",
              "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
              "bg-white dark:bg-gray-800",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <AlertDialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Are you absolutely sure?
            </AlertDialogPrimitive.Title>
            <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogPrimitive.Description>
            <div className="flex justify-end mt-4 space-x-2">
              <AlertDialogPrimitive.Cancel
                className={cx(
                  "inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md select-none",
                  "text-gray-900 bg-white hover:bg-gray-50 dark:text-gray-100 dark:bg-gray-700 hover:dark:bg-gray-600",
                  "border border-gray-300 dark:border-transparent",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              >
                Cancel
              </AlertDialogPrimitive.Cancel>
              <AlertDialogPrimitive.Action
                className={cx(
                  "inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md select-none",
                  "text-white dark:text-gray-100 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600",
                  "border border-transparent",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              >
                Confirm
              </AlertDialogPrimitive.Action>
            </div>
          </AlertDialogPrimitive.Content>
        </Transition.Child>
      </Transition.Root>
    </AlertDialogPrimitive.Root>
  );
};

export default AlertDialog;
