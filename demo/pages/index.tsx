import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React, { Fragment } from "react";
import { clsx } from "clsx";
import GitHubButton from "react-github-btn";
import { Accordion } from "../components/accordion";
import { AlertDialog } from "../components/alert-dialog";
import { AspectRatio } from "../components/aspect-ratio";
import { Avatar } from "../components/avatar";
import { Checkbox } from "../components/checkbox";
import { Collapsible } from "../components/collapsible";
import { ContextMenu } from "../components/context-menu";
import { Dialog } from "../components/dialog";
import { DropdownMenu } from "../components/dropdown-menu";
import { HoverCard } from "../components/hover-card";
import { Menubar } from "../components/menubar";
import { NavigationMenu } from "../components/navigation-menu";
import { Popover } from "../components/popover";
import { Progress } from "../components/progress";
import { RadioGroup } from "../components/radio-group";
import { Select } from "../components/select";
import { DemoCard } from "../components/shared/demo-card";
import { ThemeSwitcher } from "../components/shared/theme-switcher";
import { Slider } from "../components/slider";
import { Switch } from "../components/switch";
import { Tabs } from "../components/tabs";
import { Toast } from "../components/toast";
import { Toggle } from "../components/toggle";
import { ToggleGroup } from "../components/toggle-group";
import { Toolbar } from "../components/toolbar";
import { Tooltip } from "../components/tooltip";
import { CommandMenu } from "../components/shared/command-menu";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const REPO_URL = "https://github.com/ecklf/tailwindcss-radix/blob/main/demo";

interface RadixComponent {
  label: string;
  link: string;
  component: JSX.Element;
  isNew?: boolean;
  center?: boolean;
  wrapper?: React.ReactNode;
}

const RADIX_COMPONENTS: RadixComponent[] = [
  {
    label: "Accordion",
    link: `${REPO_URL}/components/accordion.tsx`,
    center: true,
    component: (
      <div className="max-w-sm w-full">
        <Accordion />
      </div>
    ),
  },
  {
    label: "Alert Dialog",
    link: `${REPO_URL}/components/alert-dialog.tsx`,
    component: <AlertDialog />,
  },
  {
    label: "Aspect Ratio",
    link: `${REPO_URL}/components/aspect-ratio.tsx`,
    component: (
      <div className="w-full max-w-sm">
        <AspectRatio />
      </div>
    ),
  },
  {
    label: "Avatar",
    link: `${REPO_URL}/components/avatar.tsx`,
    component: (
      <div className="z-10 grid grid-cols-4 gap-6">
        <Avatar variant={Avatar.variant.Circle} />
        <Avatar variant={Avatar.variant.Circle} renderInvalidUrls isOnline />
        <Avatar variant={Avatar.variant.Rounded} />
        <Avatar variant={Avatar.variant.Rounded} renderInvalidUrls isOnline />
      </div>
    ),
  },
  {
    label: "Checkbox",
    link: `${REPO_URL}/components/checkbox.tsx`,
    component: (
      <div className="max-w-sm rounded-md bg-white p-3 dark:bg-gray-800">
        <Checkbox />
      </div>
    ),
  },
  {
    label: "Collapsible",
    link: `${REPO_URL}/components/collapsible.tsx`,
    center: true,
    component: (
      <div className="w-full max-w-sm">
        <Collapsible />
      </div>
    ),
  },
  {
    label: "Context Menu",
    link: `${REPO_URL}/components/context-menu.tsx`,
    center: true,
    component: <ContextMenu />,
  },
  {
    label: "Dialog",
    link: `${REPO_URL}/components/dialog.tsx`,
    component: <Dialog />,
  },
  {
    label: "Dropdown Menu",
    link: `${REPO_URL}/components/dropdown-menu.tsx`,
    center: true,
    component: <DropdownMenu />,
  },
  {
    label: "Hover Card",
    link: `${REPO_URL}/components/hover-card.tsx`,
    component: <HoverCard />,
  },
  {
    label: "Menubar",
    link: `${REPO_URL}/components/menubar.tsx`,
    center: true,
    component: (
      <div>
        <Menubar />
      </div>
    ),
  },
  {
    label: "Navigation Menu",
    link: `${REPO_URL}/components/navigation-menu.tsx`,
    center: true,
    component: (
      <div>
        <NavigationMenu />
      </div>
    ),
  },
  {
    label: "Popover",
    link: `${REPO_URL}/components/popover.tsx`,
    center: true,
    component: <Popover />,
  },
  {
    label: "Progress",
    link: `${REPO_URL}/components/progress.tsx`,
    component: (
      <div className="w-full max-w-sm">
        <Progress />
      </div>
    ),
  },
  {
    label: "Radio Group",
    link: `${REPO_URL}/components/radio-group.tsx`,
    component: (
      <div className="flex items-center justify-center rounded-md bg-white px-4 py-3 dark:bg-gray-800">
        <RadioGroup />
      </div>
    ),
  },
  {
    label: "Select",
    link: `${REPO_URL}/components/select.tsx`,
    component: <Select />,
  },
  {
    label: "Slider",
    link: `${REPO_URL}/components/slider.tsx`,
    component: <Slider />,
  },
  {
    label: "Switch",
    link: `${REPO_URL}/components/switch.tsx`,
    component: <Switch />,
  },
  {
    label: "Tabs",
    link: `${REPO_URL}/components/tabs.tsx`,
    component: (
      <div className="w-full max-w-sm">
        <Tabs />
      </div>
    ),
  },
  {
    label: "Toast",
    link: `${REPO_URL}/components/toast.tsx`,
    component: (
      <div>
        <Toast />
      </div>
    ),
  },
  {
    label: "Toggle",
    link: `${REPO_URL}/components/toggle.tsx`,
    component: <Toggle />,
  },
  {
    label: "Toggle Group",
    link: `${REPO_URL}/components/toggle-group.tsx`,
    component: <ToggleGroup />,
  },
  {
    label: "Toolbar",
    link: `${REPO_URL}/components/toolbar.tsx`,
    component: <Toolbar />,
  },
  {
    label: "Tooltip",
    link: `${REPO_URL}/components/tooltip.tsx`,
    component: <Tooltip />,
  },
];

const Hero = () => {
  return (
    <div className="mt-8 inline-flex w-full flex-col items-center space-y-4 justify-self-center">
      <svg
        viewBox="0 0 248 31"
        className="h-4 w-auto text-gray-900 dark:text-white"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
          fill="#38bdf8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849H93.52v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 0 1 2.477-2.463 2.475 2.475 0 0 1 2.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094L137.8 26.961h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 0 1 2.478-2.463 2.475 2.475 0 0 1 2.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
          fill="currentColor"
        />
      </svg>
      <div className="flex space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-auto self-center text-gray-900 dark:text-white"
          viewBox="0 0 25 25"
          fill="none"
          style={{
            marginRight: 3,
          }}
        >
          <path
            d="M12 25a8 8 0 1 1 0-16v16ZM12 0H4v8h8V0ZM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            fill="currentcolor"
          />
        </svg>

        <svg
          className="h-3.5 w-auto self-center text-gray-900 dark:text-white"
          viewBox="0 0 56 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.902 17.006h2.548c-.185-.968-.28-1.89-.28-3v-4.63c0-3.12-1.78-4.655-4.976-4.655-2.894 0-4.862 1.512-5.116 4.087h2.847c.093-1.11.88-1.842 2.177-1.842 1.343 0 2.222.708 2.222 2.173v.567l-3.519.402c-2.384.283-4.237 1.275-4.237 3.685 0 2.174 1.667 3.473 3.96 3.473 1.875 0 3.457-.78 4.112-2.15.029.821.262 1.89.262 1.89Zm-3.564-1.843c-1.181 0-1.83-.59-1.83-1.535 0-1.252.95-1.536 2.2-1.701l2.616-.307v.732c0 1.89-1.458 2.811-2.986 2.811Zm15.92 1.843h2.918V0h-2.964v6.966c-.555-1.205-1.898-2.245-3.727-2.245-3.18 0-5.386 2.575-5.386 6.284 0 3.733 2.207 6.285 5.386 6.285 1.783 0 3.195-.993 3.774-2.197v1.913Zm.024-5.788c0 2.339-1.088 3.85-2.963 3.85-1.922 0-3.133-1.582-3.133-4.063 0-2.457 1.21-4.063 3.133-4.063 1.875 0 2.963 1.512 2.963 3.85v.426Zm4.625-8.245h3.148V.02h-3.148v2.953Zm.092 14.033h2.964V5.005h-2.964v12.001Zm6.665 0 2.94-4.11 2.917 4.11h3.404l-4.561-6.284 4.19-5.717h-3.172l-2.616 3.709-2.593-3.71H42.77l4.237 5.86-4.515 6.142h3.172Z"
            fill="currentcolor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.913 17v-5.983H6.8L10.45 17h3.25l-4.012-6.431c1.816-.583 3.406-2.062 3.406-4.55C13.095 2.749 10.8 1 6.957 1H0v16h2.913Zm0-13.647v5.333h3.908c2.219 0 3.339-.918 3.339-2.666 0-1.748-1.22-2.667-3.539-2.667H2.913Z"
            fill="currentcolor"
          />
        </svg>
      </div>

      <div className="min-h-[34px]">
        <GitHubButton
          href="https://github.com/ecklf/tailwindcss-radix"
          aria-label="Star ecklf/tailwindcss-radix on GitHub"
          data-color-scheme="dark"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
        >
          Star
        </GitHubButton>
      </div>

      <div className="flex items-center space-x-4 ">
        <div>
          <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
              <TooltipPrimitive.Trigger asChild>
                <div
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-2 py-1.5 text-sm font-medium",
                    "bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 hover:dark:bg-gray-800",
                    "border border-gray-300 dark:border-transparent",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                >
                  <QuestionMarkCircleIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </div>
              </TooltipPrimitive.Trigger>
              <TooltipPrimitive.Content
                sideOffset={4}
                className={clsx(
                  "radix-side-top:animate-slide-down-fade",
                  "radix-side-right:animate-slide-left-fade",
                  "radix-side-bottom:animate-slide-up-fade",
                  "radix-side-left:animate-slide-right-fade",
                  "inline-flex items-center rounded-md px-4 py-2.5",
                  "bg-white dark:bg-gray-800"
                )}
              >
                <TooltipPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <span className="block text-xs leading-none text-gray-700 dark:text-gray-100">
                    Show Menu
                  </span>
                  <div className="flex justify-center items-center space-x-1">
                    <kbd className="w-auto h-5 flex items-center justify-center select-none hover:cursor-pointer rounded-md font-bold bg-black/10 dark:bg-white/10 pt-0.5 px-1.5">
                      ⌘{" "}
                    </kbd>
                    <span className="">+</span>
                    <kbd className="w-auto text-xs h-5 flex items-center justify-center select-none hover:cursor-pointer rounded-md font-bold bg-black/10 dark:bg-white/10 px-1.5">
                      K
                    </kbd>
                  </div>
                </div>
              </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
          </TooltipPrimitive.Provider>
        </div>

        <ThemeSwitcher />
      </div>
    </div>
  );
};

const Demo = () => {
  return (
    <Fragment>
      <Head>
        <title>Tailwind CSS Radix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title="Tailwind CSS Radix"
        description="Utilities and variants for styling Radix state"
        canonical={process.env.NEXT_PUBLIC_URL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Tailwind CSS Radix",
          description: "Utilities and variants for styling Radix state",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/static/og.png`,
              width: 1200,
              height: 630,
              alt: "Tailwind CSS Radix",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@ecklflorentin",
          site: "@ecklf",
          cardType: "summary_large_image",
        }}
      />

      <Hero />
      <CommandMenu<RadixComponent>
        items={RADIX_COMPONENTS}
        onSelect={({ item, modifiers }) => {
          if (modifiers.control) {
            const newWindow = window.open(item.link, "_blank");
            if (newWindow) setTimeout(() => newWindow.focus(), 10);
          } else {
            const element = document.getElementById(
              item.label.replace(" ", "_").toLowerCase()
            );
            if (element) {
              requestAnimationFrame(() =>
                element.scrollIntoView({ behavior: "smooth" })
              );
            }
          }
        }}
      />

      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-4 py-8 md:gap-6 md:px-6 lg:grid-cols-2">
        {RADIX_COMPONENTS.map(({ label, link, component, center }, i) => (
          <DemoCard
            variant={center && DemoCard.variant.JustifyCenter}
            key={`${label}-${i}`}
            data={{
              title: label,
              link: link,
            }}
          >
            {component}
          </DemoCard>
        ))}
      </div>
    </Fragment>
  );
};

export default Demo;
