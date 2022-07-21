import plugin from "tailwindcss/plugin";

const dataAttributes = ["disabled", "highlighted"];

const namedDataAttributes = {
  state: [
    "open",
    "closed",
    "active",
    "inactive",
    "on",
    "off",
    "checked",
    "unchecked",
    "instant-open",
    "delayed-open",
    "visible",
    "hidden",
  ],
  side: ["top", "bottom", "left", "right"],
  orientation: ["horizontal", "vertical"],
  motion: ["from-start", "to-start", "from-end", "to-end"],
  swipe: ["start", "move", "cancel", "end"],
};

export = plugin.withOptions((options) => ({ addUtilities, addVariant, e }) => {
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

  // Adds the following transform origin utilities
  // `--radix-dropdown-menu-content-transform-origin`,
  // `--radix-hover-card-content-transform-origin `,
  // `--radix-context-menu-content-transform-origin`,
  // `--radix-popover-content-transform-origin`,
  // `--radix-tooltip-content-transform-origin`,
  const transformOrigins = [
    "dropdown-menu",
    "hover-card",
    "context-menu",
    "popover",
    "tooltip",
  ];

  transformOrigins.forEach((transformOrigin) => {
    addUtilities({
      [`.origin-${variantPrefix}${transformOrigin}`]: {
        "transform-origin": `var(--radix-${transformOrigin}-content-transform-origin)`,
      },
    });
  });

  dataAttributes.forEach((attributeValue) => {
    let variantName = `${variantPrefix}${attributeValue}`;
    let selector = `data-${attributeValue}`;

    addVariant(`${variantName}`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }: { className: string }) => {
        return `.${e(`${variantName}${separator}${className}`)}[${selector}]`;
      });
    });

    addVariant(`group-${variantName}`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }: { className: string }) => {
        return `.group[${selector}] .${e(
          `group-${variantName}${separator}${className}`
        )}`;
      });
    });

    addVariant(`peer-${variantName}`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }: { className: string }) => {
        return `.peer[${selector}] ~ .${e(
          `peer-${variantName}${separator}${className}`
        )}`;
      });
    });
  });

  Object.keys(namedDataAttributes).forEach((attributeName) => {
    namedDataAttributes[
      attributeName as keyof typeof namedDataAttributes
    ].forEach((attributeValue) => {
      let variantName = `${variantPrefix}${attributeName}-${attributeValue}`;
      let selector = `data-${attributeName}="${attributeValue}"`;

      addVariant(`${variantName}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }: { className: string }) => {
          return `.${e(`${variantName}${separator}${className}`)}[${selector}]`;
        });
      });

      addVariant(`group-${variantName}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }: { className: string }) => {
          return `.group[${selector}] .${e(
            `group-${variantName}${separator}${className}`
          )}`;
        });
      });

      addVariant(`peer-${variantName}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }: { className: string }) => {
          return `.peer[${selector}] ~ .${e(
            `peer-${variantName}${separator}${className}`
          )}`;
        });
      });
    });
  });

  // Adds the following [width|height] utilities
  // `--radix-accordion-content-[width|height]`,
  // `--radix-collapsible-content-[width|height]`,
  // `--radix-navigation-menu-viewport-[width|height]`,
  const dimensionAttributes = [
    "accordion-content",
    "collapsible-content",
    "navigation-menu-viewport",
  ];

  dimensionAttributes.forEach((component) => {
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

  // Adds the following [x|y] utilities
  // `--radix-toast-swipe-move-[x|y]`,
  // `--radix-toast-swipe-end-[x|y]`,
  const tooltipAttributes = ["toast-swipe-move", "toast-swipe-end"];

  tooltipAttributes.forEach((component) => {
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
  });
});
