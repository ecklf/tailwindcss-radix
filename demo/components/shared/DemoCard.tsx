import cx from "classnames";
import React, { ReactNode } from "react";

enum Variant {
  Default,
  ItemsCenter,
  JustifyCenter,
}

type Props = {
  variant?: Variant;
  children: ReactNode;
  data: {
    title: string;
    link: string;
  };
};

const DemoCard = ({
  variant = Variant.Default,
  children,
  data: { title, link },
}: Props) => {
  const id = title.replace(" ", "_").toLowerCase();

  return (
    <section
      id={id}
      className="w-full h-[550px] scroll-mt-6 rounded-xl shadow overflow-hidden"
    >
      <div
        className={cx(
          "relative flex w-full h-full p-4",
          // "bg-gradient-to-br from-pink-300 via-fuchsia-300 to-purple-400 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800"
          // "bg-gradient-to-br from-pink-400 via-fuchsia-300 to-purple-400 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800",
          "bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800",
          {
            [Variant.Default]: "items-center justify-center",
            [Variant.ItemsCenter]: "items-center",
            [Variant.JustifyCenter]: "justify-center pt-24", // Height of title bar
          }[variant]
        )}
      >
        {children}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2.5 bg-black/50 dark:bg-black/30">
          <a
            href={`#${id}`}
            className="text-sm font-medium text-white select-none dark:ext-gray-300"
          >
            {title}
          </a>
          <a
            href={link}
            rel={"noreferrer"}
            target={"_blank"}
            className="text-xs font-medium text-white dark:text-gray-100 px-2 py-1.5 bg-white/25 hover:bg-white/30 rounded select-none"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

DemoCard.variant = Variant;
export default DemoCard;
