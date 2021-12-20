[![tailwindcss v3 ready](https://img.shields.io/badge/tailwindcss-v3%20ready-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)](https://tailwindcss.com)
[![npm version](https://img.shields.io/npm/v/tailwindcss-radix.svg)](https://www.npmjs.com/package/tailwindcss-radix)
[![npm downloads](https://img.shields.io/npm/dm/tailwindcss-radix.svg)](https://www.npmjs.com/package/tailwindcss-radix)

# TailwindCSS Radix

Utilities and variants for styling Radix state

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
  // Default: `radix`
  variantPrefix: "rdx",
  // Default: `false`
  // Cannot be enabled in combination with `variantPrefix: ""`
  skipAttributeNames: false,
});
```

```ts
// Example 1: Generates `rdx-[state/side/orientation]-*` utilities for `data-[state/side/orientation]="*"`
variantPrefix: "rdx",
skipAttributeNames: false

// Example 2: Generates `[state/side/orientation]-*` utilities for `data-[state/side/orientation]="*"`
variantPrefix: "",
skipAttributeNames: false

// Example 3: Generates `rdx-*` utilities for `data-[state/side/orientation]="*"`
variantPrefix: "rdx",
skipAttributeNames: true
```

### Styling state

#### Basic usage

This plugin works with CSS attribute selectors. Use the variants based on the `data-*` attribute added by radix.

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

Sometimes we want to access state in the child of the trigger element. This can be achieved by adding the `group` class to the parent element and the `group-*` variants on the child element.

The below example shows how you can apply a conditional transform for a radix `Accordion`:

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
              <ChevronDownIcon className="w-5 h-5 ml-2 transform group-radix-state-open:rotate-180" />
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
              <ChevronDownIcon className="w-5 h-5 ml-2 transform group-radix-state-open:rotate-180" />
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

This plugin also generates the following `origin-*` utilities to transform from the content position origin.

```css
.origin-radix-dropdown-menu {
  transform-origin: var(--radix-dropdown-menu-content-transform-origin);
}

.origin-radix-hover-card {
  transform-origin: var(--radix-hover-card-content-transform-origin);
}

.origin-radix-context-menu {
  transform-origin: var(--radix-context-menu-content-transform-origin);
}

.origin-radix-popover {
  transform-origin: var(--radix-popover-content-transform-origin);
}

.origin-radix-tooltip {
  transform-origin: var(--radix-tooltip-content-transform-origin);
}
```

### Animating content size

This plugin also generates the following `h-*` and `w-*` utilities to animate the size of the content when it opens/closes.

```css
.h-radix-accordion {
  height: var(--radix-accordion-content-height);
}

.w-radix-accordion {
  widht: var(--radix-accordion-content-widht);
}

.h-radix-collapsible {
  height: var(--radix-collapsible-content-height);
}

.w-radix-collapsible {
  widht: var(--radix-collapsible-content-widht);
}
```

## License

MIT
