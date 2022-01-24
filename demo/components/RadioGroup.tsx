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
        <legend className="text-sm font-medium leading-4 text-gray-900 dark:text-gray-100">
          Choose your starter
        </legend>
        <div className="mt-3 space-y-3">
          {starters.map((pokemon) => (
            <div key={pokemon.id} className="flex items-center">
              <input
                id={pokemon.id}
                name="notification-method"
                type="radio"
                className={cx(
                  // Setting the background in dark properly requires a workaround (see css/tailwind.css)
                  "h-4 w-4 border border-transparent bg-gray-100 text-purple-600 dark:bg-gray-900",
                  "focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
                )}
              />
              <label
                htmlFor={pokemon.id}
                className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                {pokemon.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  );
};

export default RadioGroup;
