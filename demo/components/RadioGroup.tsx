import cx from "classnames";
import React from "react";

interface Props {}

const starters = [
  { id: "red", title: "Bulbasaur" },
  { id: "green", title: "Charmader" },
  { id: "blue", title: "Squirtle" },
];

const RadioGroup = (props: Props) => {
  return (
    <form>
      <fieldset>
        <legend className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Choose your starter
        </legend>
        <div className="mt-4 space-y-4">
          {starters.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === "email"}
                className={cx(
                  "w-4 h-4 text-purple-600 bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700",
                  "focus:outline-none focus:ring-transparent focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              />
              <label
                htmlFor={notificationMethod.id}
                className="block ml-3 text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  );
};

export default RadioGroup;
