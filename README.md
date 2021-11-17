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
      // Passing no configuration will add `radix` to all generated classes. E.g. `radix-state-open`
      require("tailwindcss-radix")(),
      // You can pass a custom prefix like this:
      require("tailwindcss-radix")({
        variantPrefix: "rdx"  
      })
  ],
};
```

### Styling state

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

### Animating from origin

This plugin also generates the following class to transform from the menu content position origin:

```css
.origin-radix-dropdown {
    transform-origin: var(--radix-dropdown-menu-content-transform-origin);
}
```

## Limitations

Classes will only work on the element with the radix `data-xyz` attribute as of now.

## License

MIT
