import * as AvatarPrimitive from "@radix-ui/react-avatar";
import cx from "classnames";
import React, { Fragment } from "react";
import { getRandomInitials } from "../utils/random";

enum Variant {
  Circle,
  Rounded,
}

type Props = {
  variant: Variant;
  renderInvalidUrls?: boolean;
  isOnline?: boolean;
};

let users = [
  "https://images.unsplash.com/photo-1573607217032-18299406d100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  "https://images.unsplash.com/photo-1594089426440-ab4513b4d0d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1549237511-6b64e006ce65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];

const Avatar = ({ variant, isOnline, renderInvalidUrls = false }: Props) => {
  const urls = renderInvalidUrls
    ? Array.from({ length: users.length }, () => "")
    : users;

  return (
    <Fragment>
      {urls.map((src, i) => (
        <AvatarPrimitive.Root
          key={`avatar-${i}-{src}`}
          className="relative inline-flex h-10 w-10"
        >
          <AvatarPrimitive.Image
            src={src}
            alt="Avatar"
            className={cx(
              "h-full w-full object-cover",
              {
                [Variant.Circle]: "rounded-full",
                [Variant.Rounded]: "rounded",
              }[variant]
            )}
          />
          {isOnline && (
            <div
              className={cx(
                "absolute bottom-0 right-0 h-2 w-2",
                {
                  [Variant.Circle]: "-translate-x-1/2 -translate-y-1/2",
                  [Variant.Rounded]: "",
                }[variant]
              )}
            >
              <span className="block h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
          )}
          <AvatarPrimitive.Fallback
            className={cx(
              "flex h-full w-full items-center justify-center bg-white dark:bg-gray-800",
              {
                [Variant.Circle]: "rounded-full",
                [Variant.Rounded]: "rounded",
              }[variant]
            )}
            delayMs={600}
          >
            <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400">
              {getRandomInitials()}
            </span>
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
      ))}
    </Fragment>
  );
};

Avatar.variant = Variant;
export default Avatar;
