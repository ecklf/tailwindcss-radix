import plugin from "tailwindcss/plugin";

interface Options {
  variantPrefix?: string;
}

export = plugin.withOptions<Options>(
  (options) =>
    ({ addUtilities, addVariant, e }) => {
      options = options
        ? options
        : {
            variantPrefix: "radix",
          };

      const variantPrefix =
        options.variantPrefix === "" ||
        (typeof options.variantPrefix === "boolean" &&
          options.variantPrefix === false)
          ? ""
          : `${options.variantPrefix}-`;

      (["disabled", "highlighted", "placeholder"] as const).forEach(
        (attributeValue) => {
          let variantName = `${variantPrefix}${attributeValue}`;
          let selector = `data-${attributeValue}`;
          addVariant(variantName, `&[${selector}]`);
          addVariant(`group-${variantName}`, `:merge(.group)[${selector}] &`);
          addVariant(`peer-${variantName}`, `:merge(.peer)[${selector}] ~ &`);
        }
      );

      Object.entries({
        align: ["center", "end", "start"],
        state: [
          "active",
          "checked",
          "closed",
          "delayed-open",
          "hidden",
          "inactive",
          "indeterminate",
          "instant-open",
          "off",
          "on",
          "open",
          "unchecked",
          "visible",
        ],
        side: ["bottom", "left", "right", "top"],
        orientation: ["horizontal", "vertical"],
        motion: ["from-end", "from-start", "to-end", "to-start"],
        swipe: ["cancel", "end", "move", "start"],
        "swipe-direction": ["down", "left", "right", "up"],
      } as const).forEach(([attributeName, attributeValues]) => {
        attributeValues.forEach((attributeValue) => {
          let variantName = `${variantPrefix}${attributeName}-${attributeValue}`;
          let selector = `data-${attributeName}="${attributeValue}"`;
          addVariant(variantName, `&[${selector}]`);
          addVariant(`group-${variantName}`, `:merge(.group)[${selector}] &`);
          addVariant(`peer-${variantName}`, `:merge(.peer)[${selector}] ~ &`);
        });
      });

      // Adds the following transform origin utilities
      // `--radix-context-menu-content-transform-origin`,
      // `--radix-dropdown-menu-content-transform-origin`,
      // `--radix-hover-card-content-transform-origin `,
      // `--radix-menubar-content-transform-origin`
      // `--radix-popover-content-transform-origin`,
      // `--radix-select-content-transform-origin`,
      // `--radix-tooltip-content-transform-origin`,
      (
        [
          "context-menu",
          "dropdown-menu",
          "hover-card",
          "menubar",
          "popover",
          "select",
          "tooltip",
        ] as const
      ).forEach((transformOrigin) => {
        addUtilities({
          [`.origin-${variantPrefix}${transformOrigin}`]: {
            "transform-origin": `var(--radix-${transformOrigin}-content-transform-origin)`,
          },
        });
      });

      // Adds the following [width|height] utilities
      // `--radix-accordion-content-[width|height]`,
      // `--radix-collapsible-content-[width|height]`,
      // `--radix-navigation-menu-viewport-[width|height]`,
      (
        [
          "accordion-content",
          "collapsible-content",
          "navigation-menu-viewport",
        ] as const
      ).forEach((component) => {
        addUtilities({
          [`.w-${variantPrefix}${component}`]: {
            width: `var(--radix-${component}-width)`,
          },
        });
        addUtilities({
          [`.h-${variantPrefix}${component}`]: {
            height: `var(--radix-${component}-height)`,
          },
        });
      });

      // Adds the following [width|height] utilities
      // `--radix-context-menu-content-available-[width|height]`,
      // `--radix-context-menu-trigger-[width|height]`,
      // `--radix-dropdown-menu-content-available-[width|height]`,
      // `--radix-dropdown-menu-trigger-[width|height]`,
      // `--radix-hover-card-content-available-[width|height]`,
      // `--radix-hover-card-trigger-[width|height]`,
      // `--radix-menubar-content-available-[width|height]`,
      // `--radix-menubar-trigger-[width|height]`,
      // `--radix-popover-content-available-[width|height]`,
      // `--radix-popover-trigger-[width|height]`,
      // `--radix-select-content-available-[width|height]`,
      // `--radix-select-trigger-[width|height]`,
      // `--radix-tooltip-content-available-[width|height]`,
      // `--radix-tooltip-trigger-[width|height]`,
      (
        [
          "context-menu",
          "dropdown-menu",
          "hover-card",
          "menubar",
          "popover",
          "select",
          "tooltip",
        ] as const
      ).forEach((component) => {
        addUtilities({
          [`.w-${variantPrefix}${component}`]: {
            width: `var(--radix-${component}-content-available-width)`,
          },
        });
        addUtilities({
          [`.max-w-${variantPrefix}${component}-content-available-width`]: {
            maxWidth: `var(--radix-${component}-content-available-width)`,
          },
        });
        addUtilities({
          [`.h-${variantPrefix}${component}-content-available-height`]: {
            height: `var(--radix-${component}-content-available-height)`,
          },
        });
        addUtilities({
          [`.max-h-${variantPrefix}${component}-content-available-height`]: {
            maxHeight: `var(--radix-${component}-content-available-height)`,
          },
        });
        addUtilities({
          [`.w-${variantPrefix}${component}-trigger-width`]: {
            width: `var(--radix-${component}-trigger-width)`,
          },
        });
        addUtilities({
          [`.h-${variantPrefix}${component}-trigger-height`]: {
            height: `var(--radix-${component}-trigger-height)`,
          },
        });
      });

      // Adds the following [x|y] utilities
      // `--radix-toast-swipe-end-[x|y]`,
      // `--radix-toast-swipe-move-[x|y]`,
      (["toast-swipe-end", "toast-swipe-move"] as const).forEach(
        (component) => {
          addUtilities({
            [`.translate-x-${variantPrefix}${component}-x`]: {
              transform: `translateX(var(--radix-${component}-x))`,
            },
          });
          addUtilities({
            [`.translate-y-${variantPrefix}${component}-y`]: {
              transform: `translateY(var(--radix-${component}-y))`,
            },
          });
        }
      );
    }
);
