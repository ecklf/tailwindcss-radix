<p align="center">
  <a align='center' href="https://tailwindcss-radix.vercel.app">
    <picture>
      <source type="image/webp" srcset="https://raw.githubusercontent.com/ecklf/tailwindcss-radix/main/demo/public/static/og.webp">
      <img width="967" height="auto" src="https://raw.githubusercontent.com/ecklf/tailwindcss-radix/main/demo/public/static/og.png" />
    </picture>
  </a>
</p>

<p align="center">
  Utilities and variants for styling Radix state
</p>

<div align="center">

<a href="https://tailwindcss.com">![tailwindcss v3 ready](https://img.shields.io/badge/tailwindcss-v3%20ready-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)</a>
<a href="https://www.npmjs.com/package/tailwindcss-radix">![npm version](https://img.shields.io/npm/v/tailwindcss-radix.svg)</a>
<a href="https://www.npmjs.com/package/tailwindcss-radix">![npm downloads](https://img.shields.io/npm/dm/tailwindcss-radix.svg)</a>

</div>

## What is this?

The main purpose of this library is adding classnames for accessing Radix data attributes, which gains you the benefit of auto-completion compared to using `data-*` variants.

**TL;DR** It's [@headlessui-tailwindcss](https://github.com/tailwindlabs/headlessui/tree/main/packages/@headlessui-tailwindcss) for Radix.

## Installation

```sh
pnpm add tailwindcss-radix
```

## Demo

Click on the banner to check out the demo components. You can find the code inside the [demo](https://github.com/ecklf/tailwindcss-radix/tree/main/demo) folder.

## Usage

Add the plugin to your plugins array:

```js
module.exports = {
  theme: {
    // --snip--
  },
  variants: {
    // --snip--
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
});
```

```ts
// Example 1: Generates `rdx-[state/side/orientation]-*` utilities for `data-[state/side/orientation]="*"`
variantPrefix: "rdx",

// Example 2: Generates `[state/side/orientation]-*` utilities for `data-[state/side/orientation]="*"`
variantPrefix: false,
```

### Styling state

#### Basic usage

This plugin works with CSS attribute selectors. Use the variants based on the `data-*` attribute added by Radix.

```tsx
import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const App = () => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="border-black radix-state-open:border-2">
        Trigger
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content>
        <DropdownMenuPrimitive.Item>Item</DropdownMenuPrimitive.Item>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
};

export default App;
```

#### Accessing parent state

When you need to style an element based on the state of a parent element, mark the parent with the `group` class and style the target with `group-radix-*` modifiers.

Example usage of a conditional transform for a Radix `Accordion`:

```tsx
import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Accordion = () => {
  return (
    <AccordionPrimitive.Root type="multiple">
      <AccordionPrimitive.Item value="item-1">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger className="group">
            <div className="flex items-center">
              Item 1
              <ChevronDownIcon className="w-5 h-5 ml-2 transform group-radix-state-open:rotate-180" />
            </div>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>Content 1</AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
      <AccordionPrimitive.Item value="item-2">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger className="group">
            <div className="flex items-center">
              Item 2
              <ChevronDownIcon className="w-5 h-5 ml-2 transform group-radix-state-open:rotate-180" />
            </div>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>Content 2</AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
};

export default App;
```

#### Accessing sibling state

When you need to style an element based on the state of a sibling element, mark the sibling with the `peer` class and style the target with `peer-radix-*` modifiers.

Example usage of a conditional icon color for a sibling of a Radix `Checkbox`:

```tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, TargetIcon } from "@radix-ui/react-icons";
import React from "react";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <CheckboxPrimitive.Root id="c1" defaultChecked className="peer h-5 w-5">
        <CheckboxPrimitive.Indicator>
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <TargetIcon className="text-red-500 peer-radix-state-checked:text-green-500" />
    </>
  );
};

export default App;
```

#### Disabled state

Use the generated `disabled` variant.

```tsx
import React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

const ContextMenu = () => {
  return (
    // --snip--
    <ContextMenuPrimitive.Item
      disabled
      className="radix-disabled:opacity-50 radix-disabled:cursor-not-allowed"
    >
      Item
    </ContextMenuPrimitive.Item>
    // --snip--
  );
};
```

### CSS Variable Utilities

#### Origin position

```css
.origin-radix-context-menu {
  transform-origin: var(--radix-context-menu-content-transform-origin);
}
.origin-radix-dropdown-menu {
  transform-origin: var(--radix-dropdown-menu-content-transform-origin);
}
.origin-radix-hover-card {
  transform-origin: var(--radix-hover-card-content-transform-origin);
}
.origin-radix-menubar {
  transform-origin: var(--radix-menubar-content-transform-origin);
}
.origin-radix-popover {
  transform-origin: var(--radix-popover-content-transform-origin);
}
.origin-radix-select {
  transform-origin: var(--radix-select-content-transform-origin);
}
.origin-radix-tooltip {
  transform-origin: var(--radix-tooltip-content-transform-origin);
}
```

#### Content / Viewport Width / Height

```css
.w-radix-accordion-content {
  width: var(--radix-accordion-content-width);
}
.h-radix-accordion-content {
  height: var(--radix-accordion-content-height);
}
.w-radix-collapsible-content {
  width: var(--radix-collapsible-content-width);
}
.h-radix-collapsible-content {
  height: var(--radix-collapsible-content-height);
}
.w-radix-navigation-menu-viewport {
  width: var(--radix-navigation-menu-viewport-width);
}
.h-radix-navigation-menu-viewport {
  height: var(--radix-navigation-menu-viewport-height);
}
```

#### Content Available Width / Height

```css
.w-radix-context-menu-content-available {
  width: var(--radix-context-menu-content-available-width);
}
.max-w-radix-context-menu-content-available {
  max-width: var(--radix-context-menu-content-available-width);
}
.h-radix-context-menu-content-available {
  height: var(--radix-context-menu-content-available-height);
}
.max-h-radix-context-menu-content-available {
  max-height: var(--radix-context-menu-content-available-height);
}
.w-radix-dropdown-menu-content-available {
  width: var(--radix-dropdown-menu-content-available-width);
}
.max-w-radix-dropdown-menu-content-available {
  max-width: var(--radix-dropdown-menu-content-available-width);
}
.h-radix-dropdown-menu-content-available {
  height: var(--radix-dropdown-menu-content-available-height);
}
.max-h-radix-dropdown-menu-content-available {
  max-height: var(--radix-dropdown-menu-content-available-height);
}
.w-radix-hover-card-content-available {
  width: var(--radix-hover-card-content-available-width);
}
.max-w-radix-hover-card-content-available {
  max-width: var(--radix-hover-card-content-available-width);
}
.h-radix-hover-card-content-available {
  height: var(--radix-hover-card-content-available-height);
}
.max-h-radix-hover-card-content-available {
  max-height: var(--radix-hover-card-content-available-height);
}
.w-radix-menubar-content-available {
  width: var(--radix-menubar-content-available-width);
}
.max-w-radix-menubar-content-available {
  max-width: var(--radix-menubar-content-available-width);
}
.h-radix-menubar-content-available {
  height: var(--radix-menubar-content-available-height);
}
.max-h-radix-menubar-content-available {
  max-height: var(--radix-menubar-content-available-height);
}
.w-radix-popover-content-available {
  width: var(--radix-popover-content-available-width);
}
.max-w-radix-popover-content-available {
  max-width: var(--radix-popover-content-available-width);
}
.h-radix-popover-content-available {
  height: var(--radix-popover-content-available-height);
}
.max-h-radix-popover-content-available {
  max-height: var(--radix-popover-content-available-height);
}
.w-radix-select-content-available {
  width: var(--radix-select-content-available-width);
}
.max-w-radix-select-content-available {
  max-width: var(--radix-select-content-available-width);
}
.h-radix-select-content-available {
  height: var(--radix-select-content-available-height);
}
.max-h-radix-select-content-available {
  max-height: var(--radix-select-content-available-height);
}
.w-radix-tooltip-content-available {
  width: var(--radix-tooltip-content-available-width);
}
.max-w-radix-tooltip-content-available {
  max-width: var(--radix-tooltip-content-available-width);
}
.h-radix-tooltip-content-available {
  height: var(--radix-tooltip-content-available-height);
}
.max-h-radix-tooltip-content-available {
  max-height: var(--radix-tooltip-content-available-height);
}
```

#### Trigger Available Width / Height

```css
.w-radix-context-menu-trigger {
  width: var(--radix-context-menu-trigger-width);
}
.h-radix-context-menu-trigger {
  height: var(--radix-context-menu-trigger-height);
}
.w-radix-dropdown-menu-trigger {
  width: var(--radix-dropdown-menu-trigger-width);
}
.h-radix-dropdown-menu-trigger {
  height: var(--radix-dropdown-menu-trigger-height);
}
.w-radix-hover-card-trigger {
  width: var(--radix-hover-card-trigger-width);
}
.h-radix-hover-card-trigger {
  height: var(--radix-hover-card-trigger-height);
}
.w-radix-menubar-trigger {
  width: var(--radix-menubar-trigger-width);
}
.h-radix-menubar-trigger {
  height: var(--radix-menubar-trigger-height);
}
.w-radix-popover-trigger {
  width: var(--radix-popover-trigger-width);
}
.h-radix-popover-trigger {
  height: var(--radix-popover-trigger-height);
}
.w-radix-select-trigger {
  width: var(--radix-select-trigger-width);
}
.h-radix-select-trigger {
  height: var(--radix-select-trigger-height);
}
.w-radix-tooltip-trigger {
  width: var(--radix-tooltip-trigger-width);
}
.h-radix-tooltip-trigger {
  height: var(--radix-tooltip-trigger-height);
}
```

#### Toast swiping

```css
.translate-x-radix-toast-swipe-end-x {
  transform: translateX(var(--radix-toast-swipe-end-x));
}
.translate-y-radix-toast-swipe-end-y {
  transform: translateY(var(--radix-toast-swipe-end-y));
}
.translate-x-radix-toast-swipe-move-x {
  transform: translateX(var(--radix-toast-swipe-move-x));
}
.translate-y-radix-toast-swipe-move-y {
  transform: translateY(var(--radix-toast-swipe-move-y));
}
```

## Migrate from v1

To prevent a possible future name clashing the `skipAttributeNames` option has been removed. In case you used this option, please update the class names accordingly.

## Migrate from v2

In case you use `content-available` utilities:

- Add `-content-available` to the width-based classnames
- Remove `width` and `height` from `content-available-[width|height]`

<details><summary>View diff</summary>
<p>

```diff
-w-radix-context-menu
+w-radix-context-menu-content-available

-h-radix-context-menu-content-available-height
+h-radix-context-menu-content-available

-max-w-radix-context-menu-content-available-width
+max-w-radix-context-menu-content-available

-max-h-radix-context-menu-content-available-height
+max-h-radix-context-menu-content-available


-w-radix-dropdown-menu
+w-radix-dropdown-menu-content-available

-h-radix-dropdown-menu-content-available-height
+h-radix-dropdown-menu-content-available

-max-w-radix-dropdown-menu-content-available-width
+max-w-radix-dropdown-menu-content-available

-max-h-radix-dropdown-menu-content-available-height
+max-h-radix-dropdown-menu-content-available


-w-radix-hover-card
+w-radix-hover-card-content-available

-h-radix-hover-card-content-available-height
+h-radix-hover-card-content-available

-max-w-radix-hover-card-content-available-width
+max-w-radix-hover-card-content-available

-max-h-radix-hover-card-content-available-height
+max-h-radix-hover-card-content-available


-w-radix-menubar
+w-radix-menubar-content-available

-h-radix-menubar-content-available-height
+h-radix-menubar-content-available

-max-w-radix-menubar-content-available-width
+max-w-radix-menubar-content-available

-max-h-radix-menubar-content-available-height
+max-h-radix-menubar-content-available


-w-radix-popover
+w-radix-popover-content-available

-h-radix-popover-content-available-height
+h-radix-popover-content-available

-max-w-radix-popover-content-available-width
+max-w-radix-popover-content-available

-max-h-radix-popover-content-available-height
+max-h-radix-popover-content-available


-w-radix-select
+w-radix-select-content-available

-h-radix-select
+h-radix-select-content-available

-max-w-radix-select-content-available-width
+max-w-radix-select-content-available

-max-h-radix-select-content-available-height
+max-h-radix-select-content-available


-w-radix-tooltip
+w-radix-tooltip-content-available

-h-radix-tooltip
+h-radix-tooltip-content-available

-max-w-radix-tooltip-content-available-width
+max-w-radix-tooltip-content-available

-max-h-radix-tooltip-content-available-height
+max-h-radix-tooltip-content-available
```

</p>
</details>

## License

[MIT](LICENSE)

<!-- [<img src="https://raw.githubusercontent.com/ecklf/tailwindcss-radix/main/demo/public/static/og.png" width="967">](https://tailwindcss-radix.vercel.app)
[![tailwindcss v3 ready](https://img.shields.io/badge/tailwindcss-v3%20ready-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)](https://tailwindcss.com)
[![npm version](https://img.shields.io/npm/v/tailwindcss-radix.svg)](https://www.npmjs.com/package/tailwindcss-radix)
[![npm downloads](https://img.shields.io/npm/dm/tailwindcss-radix.svg)](https://www.npmjs.com/package/tailwindcss-radix) -->
