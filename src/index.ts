import plugin from "tailwindcss/plugin";

const dataAttributes = ["disabled"];

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
  ],
  side: ["top", "bottom", "left", "right"],
  orientation: ["horizontal", "vertical"],
};

export = plugin.withOptions((options) => ({ addUtilities, addVariant, e }) => {
  options = options
    ? options
    : {
        variantPrefix: "radix",
        skipAttributeNames: false,
      };

  if (options?.variantPrefix === "" && options?.skipAttributeNames === true) {
    throw new Error(
      "tailwindcss-radix: Cannot use empty `variantPrefix` while `skipAttributeNames` is enabled"
    );
  }

  const variantPrefix =
    options.variantPrefix === "" ? "" : `${options.variantPrefix}-`;

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
  });

  Object.keys(namedDataAttributes).forEach((attributeName) => {
    namedDataAttributes[
      attributeName as keyof typeof namedDataAttributes
    ].forEach((attributeValue) => {
      let variantName = options.skipAttributeNames
        ? `${variantPrefix}${attributeValue}`
        : `${variantPrefix}${attributeName}-${attributeValue}`;
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
    });
  });

  // Adds the following height utilities
  // `--radix-accordion-content-height`,
  // `--radix-collapsible-content-height`,
  const componentContentHeights = ["accordion", "collapsible"];

  componentContentHeights.forEach((component) => {
    addUtilities({
      [`.h-${variantPrefix}${component}`]: {
        height: `var(--radix-${component}-content-height)`,
      },
    });
  });

  // Adds the following width utilities
  // `--radix-accordion-content-width`,
  // `--radix-collapsible-content-width`,
  const componentContentWidths = ["accordion", "collapsible"];

  componentContentWidths.forEach((component) => {
    addUtilities({
      [`.w-${variantPrefix}${component}`]: {
        width: `var(--radix-${component}-content-width)`,
      },
    });
  });
});
