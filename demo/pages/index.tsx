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

      <div className="w-full h-screen overflow-y-scroll snap-y">
        <div className="w-full h-screen p-6 snap-center">
          <div className="relative flex items-center justify-center w-full h-full shadow-md rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-600 via-fuchsia-800 to-purple-600 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800" />
            <div className="z-10 -translate-y-[9.5rem]">
              <DropdownMenu />
            </div>
          </div>
        </div>
        <div className="w-full h-screen p-6 snap-center">
          <div className="relative flex items-center justify-center w-full h-full p-4 overflow-hidden shadow-md rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-600 via-fuchsia-800 to-purple-600 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800" />
            <div className="z-10 w-full max-w-sm">
              <Accordion />
            </div>
          </div>
        </div>
        <div className="w-full h-screen p-6 snap-center">
          <div className="relative flex items-center justify-center w-full h-full p-4 overflow-hidden shadow-md rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-600 via-fuchsia-800 to-purple-600 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800" />
            <Toggle />
          </div>
        </div>
        <div className="w-full h-screen p-6 snap-center">
          <div className="relative flex items-center justify-center w-full h-full px-4 overflow-hidden shadow-md rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-600 via-fuchsia-800 to-purple-600 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800" />
            <Slider />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Demo;
