import path from "node:path";
import postcss from "postcss";
import tailwind, { type Config } from "tailwindcss";
import { expect, it } from "vitest";
import radix from "./index";

const html = String.raw;

function run(input: string, config: Config, plugin = tailwind) {
  const { currentTestName } = expect.getState();

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  });
}

it("should generate boolean data attribute variants", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="radix-disabled:opacity-50" />
          <div class="group">
            <div class="group-radix-disabled:cursor-not-allowed" />
          </div>
          <div class="group/named">
            <div class="group-radix-disabled/named:cursor-not-allowed" />
          </div>
          <div class="peer" />
          <div class="peer-radix-disabled:cursor-not-allowed" />
          <div class="peer/named" />
          <div class="peer-radix-disabled/named:cursor-not-allowed" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchInlineSnapshot(`
      ".radix-disabled\\:opacity-50[data-disabled] {
          opacity: 0.5
      }"
    `);
  });
});

it("should generate value data attribute variants", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="radix-state-open:opacity-50" />
          <div class="group">
            <div class="group-radix-state-open:cursor-not-allowed" />
          </div>
          <div class="group/named">
            <div class="group-radix-state-open/named:cursor-not-allowed" />
          </div>
          <div class="peer" />
          <div class="peer-radix-state-open:cursor-not-allowed" />
          <div class="peer/named" />
          <div class="peer-radix-state-open/named:cursor-not-allowed" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate [width|height] utilities", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="w-radix-navigation-menu-viewport" />
          <div class="h-radix-navigation-menu-viewport" />
          <div class="w-radix-accordion-content" />
          <div class="h-radix-accordion-content" />
          <div class="w-radix-collapsible-content" />
          <div class="h-radix-collapsible-content" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate [width|height] `content-available` utilities", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="w-radix-context-menu-content-available" />
          <div class="max-w-radix-context-menu-content-available" />
          <div class="h-radix-context-menu-content-available" />
          <div class="max-h-radix-context-menu-content-available" />

          <div class="w-radix-dropdown-menu-content-available" />
          <div class="max-w-radix-dropdown-menu-content-available" />
          <div class="h-radix-dropdown-menu-content-available" />
          <div class="max-h-radix-dropdown-menu-content-available" />

          <div class="w-radix-hover-card-content-available" />
          <div class="max-w-radix-hover-card-content-available" />
          <div class="h-radix-hover-card-content-available" />
          <div class="max-h-radix-hover-card-content-available" />

          <div class="w-radix-menubar-content-available" />
          <div class="max-w-radix-menubar-content-available" />
          <div class="h-radix-menubar-content-available" />
          <div class="max-h-radix-menubar-content-available" />

          <div class="w-radix-popover-content-available" />
          <div class="max-w-radix-popover-content-available" />
          <div class="h-radix-popover-content-available" />
          <div class="max-h-radix-popover-content-available" />

          <div class="w-radix-select-content-available" />
          <div class="max-w-radix-select-content-available" />
          <div class="h-radix-select-content-available" />
          <div class="max-h-radix-select-content-available" />

          <div class="w-radix-tooltip-content-available" />
          <div class="max-w-radix-tooltip-content-available" />
          <div class="h-radix-tooltip-content-available" />
          <div class="max-h-radix-tooltip-content-available" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate [width|height] `trigger` utilities", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="w-radix-context-menu-trigger" />
          <div class="h-radix-context-menu-trigger" />

          <div class="w-radix-dropdown-menu-trigger" />
          <div class="h-radix-dropdown-menu-trigger" />

          <div class="w-radix-hover-card-trigger" />
          <div class="h-radix-hover-card-trigger" />

          <div class="w-radix-menubar-trigger" />
          <div class="h-radix-menubar-trigger" />

          <div class="w-radix-popover-trigger" />
          <div class="h-radix-popover-trigger" />

          <div class="w-radix-select-trigger" />
          <div class="h-radix-select-trigger" />

          <div class="w-radix-tooltip-trigger" />
          <div class="h-radix-tooltip-trigger" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate `content-transform-origin` utilities", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="origin-radix-context-menu" />
          <div class="origin-radix-dropdown-menu" />
          <div class="origin-radix-hover-card" />
          <div class="origin-radix-menubar" />
          <div class="origin-radix-popover" />
          <div class="origin-radix-select" />
          <div class="origin-radix-tooltip" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate tooltip transform utilities", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="translate-x-radix-toast-swipe-end-x" />
          <div class="translate-y-radix-toast-swipe-end-y" />
          <div class="translate-x-radix-toast-swipe-move-x" />
          <div class="translate-y-radix-toast-swipe-move-y" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});
