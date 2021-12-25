import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import cx from "classnames";
import React, { Fragment, useState } from "react";

interface Props {}

const AlertDialog = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogPrimitive.Trigger
          className={cx(
            "radix-state-open:bg-gray-900 group",
            "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-md select-none",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        >
          Modal
        </AlertDialogPrimitive.Trigger>
        <Transition.Root show={isOpen}>
          <AlertDialogPrimitive.Portal>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <AlertDialogPrimitive.Overlay className="fixed inset-0 z-20 bg-black/50" />
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
                className={cx(
                  "fixed z-50",
                  "w-full max-w-md dark:bg-gray-800 rounded-lg p-4",
                  "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              >
                <AlertDialogPrimitive.Title className="text-sm font-semibold dark:text-white">
                  Are you absolutely sure?
                </AlertDialogPrimitive.Title>
                <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal dark:text-gray-400">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogPrimitive.Description>
                <div className="flex justify-end mt-4 space-x-2">
                  <AlertDialogPrimitive.Cancel
                    className={cx(
                      "inline-flex justify-center px-4 py-2 text-sm font-medium dark:text-gray-300 dark:bg-gray-700 hover:dark:bg-gray-600 rounded-md select-none",
                      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    )}
                  >
                    Cancel
                  </AlertDialogPrimitive.Cancel>
                  <AlertDialogPrimitive.Action
                    className={cx(
                      "inline-flex justify-center px-4 py-2 text-sm font-medium dark:text-white bg-purple-700 hover:bg-purple-600 rounded-md select-none",
                      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    )}
                  >
                    Confirm
                  </AlertDialogPrimitive.Action>
                </div>
              </AlertDialogPrimitive.Content>
            </Transition.Child>
          </AlertDialogPrimitive.Portal>
        </Transition.Root>
      </AlertDialogPrimitive.Root>
    </Fragment>
  );
};

export default AlertDialog;
