import cx from "classnames";
import React from "react";

type Props = Omit<React.ComponentProps<"button">, "className"> & {};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={cx(
        "inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-md select-none",
        "focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-30 dark:focus-visible:ring-purple-500 dark:focus-visible:ring-opacity-75",
        // Register all radix states
        "group",
        "radix-state-open:bg-gray-100 dark:radix-state-open:bg-gray-900",
        "radix-state-on:bg-gray-100 dark:radix-state-off:bg-gray-900"
      )}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
