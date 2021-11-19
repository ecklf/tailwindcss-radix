import plugin from "tailwindcss/plugin";

const dataAttributes = {
  state: ["open", "close"],
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

  const transformOrigins = [
    "dropdown-menu",
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
