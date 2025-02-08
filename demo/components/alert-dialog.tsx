import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import React, { Fragment, useState } from "react";
import Button from "./shared/button";

const AlertDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitive.Trigger asChild>
        <Button>Click</Button>
      </AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal forceMount>
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
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
                "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "bg-white dark:bg-gray-800",
                "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <AlertDialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Are you absolutely sure?
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogPrimitive.Description>
              <div className="mt-4 flex justify-end space-x-2">
                <AlertDialogPrimitive.Cancel
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                    "bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
                    "border border-gray-300 dark:border-transparent",
                    "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                >
                  Cancel
                </AlertDialogPrimitive.Cancel>
                <AlertDialogPrimitive.Action
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                    "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                    "border border-transparent",
                    "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                >
                  Confirm
                </AlertDialogPrimitive.Action>
              </div>
            </AlertDialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};

export { AlertDialog };
