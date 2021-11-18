[![npm version](https://img.shields.io/npm/v/tailwindcss-radix.svg)](https://www.npmjs.com/package/tailwindcss-radix)
[![npm downloads](https://img.shields.io/npm/dm/tailwindcss-radix.svg)](https://www.npmjs.com/package/tailwindcss-radix)

# TailwindCSS Radix

TailwindCSS plugin that helps styling radix state.

## Installation

### yarn

```sh
yarn add tailwindcss-radix
```

### npm

```sh
npm i tailwindcss-radix
```

## Usage

You can find the demo dropdown menu inside the `demo` folder.

Add the plugin to your plugins array:

```js
module.exports = {
  theme: {
    // ...
  },
  variants: {
    // ...
  },
  plugins: [
      // Initialize with default values (see options below)
      require("tailwindcss-radix")(),
  ],
};
```

### Options

```ts
require("tailwindcss-radix")({
  // Default: `"radix`
  variantPrefix: "rdx",
  // Default: `false`
  // Enabling cannot be used in combination with `variantPrefix: ""`
  skipAttributeNames: false
})
```

```ts
// Example 1: Generates `rdx-[state/side]-*` utilities for `data-[state/side]="*"`
variantPrefix: "rdx",
skipAttributeNames: false

// Example 2: Generates `[state/side]-*` utilities for `data-[state/side]="*"`
variantPrefix: "",
skipAttributeNames: false

// Example 3: Generates `rdx-*` utilities for `data-[state/side]="*"`
variantPrefix: "rdx",
skipAttributeNames: true
```

### Styling state

#### Basic usage

This plugin works with CSS attribute selectors. Use the utilities based on the `data-*` attribute added by radix.

```tsx
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const App = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="border-black radix-state-open:border-2">
        Trigger
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Item</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>  
  );
};

export default App;
```

#### Accessing parent state

Sometimes we want to access state in the child of the trigger element. This can be achieved by using the `group` utilities.

The below example shows how you can apply a conditional transform for a radix Accordion:

```tsx
import React from "react";
import * as DropdownMenu from "@radix-ui/react-accordion";

const App = () => {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger className="group">
            <div className="flex items-center">
              Item 1
              <ChevronDownIcon className="w-5 h-5 ml-2 transform group-state-open:rotate-180" />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Accordion.Trigger className="group">
            <div className="flex items-center">
              Item 2
              <ChevronDownIcon className="w-5 h-5 ml-2 transform group-state-open:rotate-180" />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root> 
  );
};

export default App;
```

### Animating from origin

This plugin also generates the following class to transform from the menu content position origin.

```css
.origin-radix-dropdown {
    transform-origin: var(--radix-dropdown-menu-content-transform-origin);
}
```

## License

MIT
