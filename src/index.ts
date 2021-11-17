import plugin from "tailwindcss/plugin";

const dataAttributes = {
  state: ["open", "close"],
  side: ["top", "bottom", "left", "right"],
};

export = plugin.withOptions((options) => ({ addUtilities, addVariant, e }) => {
  const variantPrefix = options?.variantPrefix ?? "radix";

  Object.keys(dataAttributes).forEach((k) => {
    dataAttributes[k as keyof typeof dataAttributes].forEach((v) => {
      addUtilities({
        [`.origin-${variantPrefix ? `${variantPrefix}-` : ""}dropdown`]: {
          "transform-origin":
            "var(--radix-dropdown-menu-content-transform-origin)",
        },
      });

      let variantName = `${variantPrefix ? `${variantPrefix}-` : ""}${k}-${v}`;
      let selector = `data-${k}="${v}"`;

      addVariant(`${variantName}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }: { className: string }) => {
          return `.${e(`${variantName}${separator}${className}`)}[${selector}]`;
        });
      });
    });
  });
});
