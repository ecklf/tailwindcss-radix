import plugin from "tailwindcss/plugin";

interface Options {
  variantPrefix?: string | boolean;
}

export = plugin.withOptions<Options>(
  (options) =>
    ({ addUtilities, matchVariant }) => {
      const ops = options
        ? options
        : {
            variantPrefix: "radix",
          };

      const variantPrefix =
        ops.variantPrefix === "" ||
        (typeof ops.variantPrefix === "boolean" && ops.variantPrefix === false)
          ? ""
          : `${ops.variantPrefix}`;

      // Adds variants for boolean data attributes
      const booleanAttributes = {
        disabled: "disabled",
        highlighted: "highlighted",
        placeholder: "placeholder",
      } as const;

      matchVariant(
        variantPrefix,
        (value) => {
          return `&[data-${value}]`;
        },
        {
          values: booleanAttributes,
        }
      );

      matchVariant(
        `group-${variantPrefix}`,
        (value, { modifier }) => {
          return modifier
            ? `:merge(.group\\/${modifier})[data-${value}] &`
            : `:merge(.group)[data-${value}] &`;
        },
        {
          values: booleanAttributes,
        }
      );

      matchVariant(
        `peer-${variantPrefix}`,
        (value, { modifier }) => {
          return modifier
            ? `:merge(.peer\\/${modifier})[data-${value}] ~ &`
            : `:merge(.peer)[data-${value}] ~ &`;
        },
        {
          values: booleanAttributes,
        }
      );

      // Adds variants for value data attributes
      for (const [attributeName, attributeValues] of Object.entries({
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
      } as const)) {
        const values = Object.fromEntries(
          attributeValues.map((item) => [item, item])
        );

        matchVariant(
          `${variantPrefix}-${attributeName}`,
          (value) => {
            return `&[data-${attributeName}="${value}"]`;
          },
          {
            values,
          }
        );

        matchVariant(
          `group-${variantPrefix}-${attributeName}`,
          (value, { modifier }) => {
            return modifier
              ? `:merge(.group\\/${modifier})[data-${attributeName}="${value}"] &`
              : `:merge(.group)[data-${attributeName}="${value}"] &`;
          },
          {
            values,
          }
        );

        matchVariant(
          `peer-${variantPrefix}-${attributeName}`,
          (value, { modifier }) => {
            return modifier
              ? `:merge(.peer\\/${modifier})[data-${attributeName}="${value}"] ~ &`
              : `:merge(.peer)[data-${attributeName}="${value}"] ~ &`;
          },
          {
            values,
          }
        );
      }

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
      ).forEach((kind) => {
        addUtilities({
          [`.w-${variantPrefix}-${kind}`]: {
            width: `var(--radix-${kind}-width)`,
          },
        });
        addUtilities({
          [`.h-${variantPrefix}-${kind}`]: {
            height: `var(--radix-${kind}-height)`,
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
          [`.w-${variantPrefix}-${component}-content-available`]: {
            width: `var(--radix-${component}-content-available-width)`,
          },
        });
        addUtilities({
          [`.max-w-${variantPrefix}-${component}-content-available`]: {
            maxWidth: `var(--radix-${component}-content-available-width)`,
          },
        });
        addUtilities({
          [`.h-${variantPrefix}-${component}-content-available`]: {
            height: `var(--radix-${component}-content-available-height)`,
          },
        });
        addUtilities({
          [`.max-h-${variantPrefix}-${component}-content-available`]: {
            maxHeight: `var(--radix-${component}-content-available-height)`,
          },
        });
        addUtilities({
          [`.w-${variantPrefix}-${component}-trigger`]: {
            width: `var(--radix-${component}-trigger-width)`,
          },
        });
        addUtilities({
          [`.h-${variantPrefix}-${component}-trigger`]: {
            height: `var(--radix-${component}-trigger-height)`,
          },
        });
      });

      // Adds the following content-transform-origin utilities
      // `--radix-context-menu-content-transform-origin`,
      // `--radix-dropdown-menu-content-transform-origin`,
      // `--radix-hover-card-content-transform-origin `,
      // `--radix-menubar-content-transform-origin`
      // `--radix-popover-content-transform-origin`,
      // `--radix-select-content-transform-origin`,
      // `--radix-tooltip-content-transform-origin`
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
          [`.origin-${variantPrefix}-${component}`]: {
            "transform-origin": `var(--radix-${component}-content-transform-origin)`,
          },
        });
      });

      // Adds the following [x|y] utilities
      // `--radix-toast-swipe-end-[x|y]`,
      // `--radix-toast-swipe-move-[x|y]`,
      (["toast-swipe-end", "toast-swipe-move"] as const).forEach((swipe) => {
        addUtilities({
          [`.translate-x-${variantPrefix}-${swipe}-x`]: {
            transform: `translateX(var(--radix-${swipe}-x))`,
          },
        });
        addUtilities({
          [`.translate-y-${variantPrefix}-${swipe}-y`]: {
            transform: `translateY(var(--radix-${swipe}-y))`,
          },
        });
      });
    }
);
