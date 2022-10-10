import cx from "classnames";
import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

interface Props {}

const starters = [
  { id: "red", title: "Bulbasaur" },
  { id: "green", title: "Charmader" },
  { id: "blue", title: "Squirtle" },
];

const RadioGroup = (props: Props) => {
  const [value, setValue] = React.useState(starters[0].title);

  return (
    <form>
      <legend className="text-sm font-medium leading-4 text-gray-900 dark:text-gray-100">
        Choose your starter
      </legend>
      <RadioGroupPrimitive.Root
        aria-label="Pokemon starters"
        defaultValue={"Bulbasaur"}
        onValueChange={setValue}
      >
        <div className="mt-3 space-y-3">
          {starters.map((pokemon) => (
            <div key={pokemon.id} className="flex items-center">
              <RadioGroupPrimitive.Item
                id={pokemon.id}
                value={pokemon.title}
                className={cx(
                  "peer relative w-4 h-4 rounded-full",
                  // Setting the background in dark properly requires a workaround (see css/tailwind.css)
                  "border border-transparent text-white",
                  "radix-state-checked:bg-purple-600",
                  "radix-state-unchecked:bg-gray-100 dark:radix-state-unchecked:bg-gray-900",
                  "focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
                )}
              >
                <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </RadioGroupPrimitive.Indicator>
              </RadioGroupPrimitive.Item>
              <label
                htmlFor={pokemon.id}
                className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                {pokemon.title}
              </label>
            </div>
          ))}
        </div>
      </RadioGroupPrimitive.Root>
    </form>
  );
};

export default RadioGroup;
