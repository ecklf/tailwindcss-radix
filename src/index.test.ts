import path from "path";
import postcss from "postcss";
import tailwind from "tailwindcss";
import { expect, it } from "vitest";
import radix from "./index";

let html = String.raw;

function run(input: string, config: any, plugin = tailwind) {
  let { currentTestName } = expect.getState();

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  });
}

it("should generate stateful data attributes", async () => {
  let config = {
    content: [
      {
        raw: html`
          <div class="radix-state-open:opacity-50" />
          <div class="group">
            <div class="group-radix-state-open:cursor-not-allowed" />
          </div>
          <div class="peer" />
          <div class="peer-radix-state-open:cursor-not-allowed" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate static data attributes", async () => {
  let config = {
    content: [
      {
        raw: html`
          <div class="radix-disabled:opacity-50" />
          <div class="group">
            <div class="group-radix-disabled:cursor-not-allowed" />
          </div>
          <div class="peer" />
          <div class="peer-radix-disabled:cursor-not-allowed" />

          <div class="radix-highlighted:opacity-50" />
          <div class="group">
            <div class="group-radix-highlighted:cursor-not-allowed" />
          </div>
          <div class="peer" />
          <div class="peer-radix-highlighted:cursor-not-allowed" />

          <div class="radix-placeholder:opacity-50" />
          <div class="group">
            <div class="group-radix-placeholder:cursor-not-allowed" />
          </div>
          <div class="peer" />
          <div class="peer-radix-placeholder:cursor-not-allowed" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate transform origins", async () => {
  let config = {
    content: [
      {
        raw: html`
          <div class="origin-radix-context-menu" />
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

it("should generate tooltip transoforms", async () => {
  let config = {
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

it("should generate tooltip dimensions", async () => {
  let config = {
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

it("should generate dimension origins", async () => {
  let config = {
    content: [
      {
        raw: html`
          <div class="w-radix-context-menu" />
          <div class="max-w-radix-context-menu-content-available-width" />
          <div class="h-radix-context-menu-content-available-height" />
          <div class="max-h-radix-context-menu-content-available-height" />
          <div class="w-radix-context-menu-trigger-width" />
          <div class="h-radix-context-menu-trigger-height" />

          <div class="w-radix-dropdown-menu" />
          <div class="max-w-radix-dropdown-menu-content-available-width" />
          <div class="h-radix-dropdown-menu-content-available-height" />
          <div class="max-h-radix-dropdown-menu-content-available-height" />
          <div class="w-radix-dropdown-menu-trigger-width" />
          <div class="h-radix-dropdown-menu-trigger-height" />

          <div class="w-radix-hover-card" />
          <div class="max-w-radix-hover-card-content-available-width" />
          <div class="h-radix-hover-card-content-available-height" />
          <div class="max-h-radix-hover-card-content-available-height" />
          <div class="w-radix-hover-card-trigger-width" />
          <div class="h-radix-hover-card-trigger-height" />

          <div class="w-radix-menubar" />
          <div class="max-w-radix-menubar-content-available-width" />
          <div class="h-radix-menubar-content-available-height" />
          <div class="max-h-radix-menubar-content-available-height" />
          <div class="w-radix-menubar-trigger-width" />
          <div class="h-radix-menubar-trigger-height" />

          <div class="w-radix-popover" />
          <div class="max-w-radix-popover-content-available-width" />
          <div class="h-radix-popover-content-available-height" />
          <div class="max-h-radix-popover-content-available-height" />
          <div class="w-radix-popover-trigger-width" />
          <div class="h-radix-popover-trigger-height" />

          <div class="w-radix-select" />
          <div class="max-w-radix-select-content-available-width" />
          <div class="h-radix-select-content-available-height" />
          <div class="max-h-radix-select-content-available-height" />
          <div class="w-radix-select-trigger-width" />
          <div class="h-radix-select-trigger-height" />

          <div class="w-radix-tooltip" />
          <div class="max-w-radix-tooltip-content-available-width" />
          <div class="h-radix-tooltip-content-available-height" />
          <div class="max-h-radix-tooltip-content-available-height" />
          <div class="w-radix-tooltip-trigger-width" />
          <div class="h-radix-tooltip-trigger-height" />
        `,
      },
    ],
    plugins: [radix],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});
