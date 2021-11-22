import plugin from "tailwindcss/plugin";

const dataAttributes = {
  state: ["open", "close", "active"],
  side: ["top", "bottom", "left", "right"],
  orientation: ["horizontal", "vertical"],
};

export = plugin.withOptions((options) => ({ addUtilities, addVariant, e }) => {
  if (options.variantPrefix === "" && options.skipAttributeNames === true) {
    throw new Error(
      "tailwindcss-radix: Cannot use empty `variantPrefix` while `skipAttributeNames` is enabled"
    );
  }

  const variantPrefix = options
    ? options.variantPrefix === ""
      ? ""
      : `${options.variantPrefix}-`
    : "radix-";

  // Adds the following transform origin utilities
  // `--radix-dropdown-menu-content-transform-origin`,
  // `--radix-hover-card-content-transform-origin `,
  // `--radix-context-menu-content-transform-origin`,
  // `--radix-popover-content-transform-origin`,
  // `--radix-tooltip-content-transform-origin`,
  // `--radix-tabs-content-transform-origin`,
  const transformOrigins = [
    "dropdown-menu",
    "hover-card",
    "context-menu",
    "popover",
    "tooltip",
    "tabs",
  ];

  transformOrigins.forEach((transformOrigin) => {
    addUtilities({
      [`.origin-${variantPrefix}${transformOrigin}`]: {
        "transform-origin": `var(--radix-${transformOrigin}-content-transform-origin)`,
      },
    });
  });

  Object.keys(dataAttributes).forEach((attributeName) => {
    dataAttributes[attributeName as keyof typeof dataAttributes].forEach(
      (attributeValue) => {
        let variantName = options.skipAttributeNames
          ? `${variantPrefix}${attributeValue}`
          : `${variantPrefix}${attributeName}-${attributeValue}`;
        let selector = `data-${attributeName}="${attributeValue}"`;

        addVariant(`${variantName}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }: { className: string }) => {
            return `.${e(
              `${variantName}${separator}${className}`
            )}[${selector}]`;
          });
        });

        addVariant(`group-${variantName}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }: { className: string }) => {
            return `.group[${selector}] .${e(
              `group-${variantName}${separator}${className}`
            )}`;
          });
        });
      }
    );
  });
});
