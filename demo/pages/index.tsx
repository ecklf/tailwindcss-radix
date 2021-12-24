import Head from "next/head";
import React, { Fragment } from "react";
import Accordion from "../components/Accordion";
import DropdownMenu from "../components/DropdownMenu";
import Slider from "../components/Slider";
import Toggle from "../components/Toggle";

interface Props {}

const Demo = (props: Props) => {
  return (
    <Fragment>
      <Head>
        <title>TailwindCSS Radix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-4 p-4 md:gap-6 md:p-6 lg:grid-cols-2">
        <div className="w-full h-[500px]">
          <div className="relative flex justify-center w-full h-full shadow-md rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-600 via-fuchsia-800 to-purple-600 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800" />
            <div className="mt-9">
              <DropdownMenu />
            </div>
          </div>
        </div>
        <div className="w-full h-[500px]">
          <div className="relative flex items-center justify-center w-full h-full px-6 overflow-hidden shadow-md rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-600 via-fuchsia-800 to-purple-600 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800" />
            <div className="z-10 w-full max-w-sm">
              <Accordion />
            </div>
          </div>
        </div>
        <div className="w-full h-[500px]">
          <div className="relative flex items-center justify-center w-full h-full px-6 overflow-hidden shadow-md rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-600 via-fuchsia-800 to-purple-600 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800" />
            <Toggle />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <div className="relative flex items-center justify-center w-full h-full px-6 overflow-hidden shadow-md rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-600 via-fuchsia-800 to-purple-600 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800" />
            <Slider />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Demo;
