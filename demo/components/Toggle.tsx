import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import React, { useState } from "react";
import Button from "./shared/Button";

interface Props {}

const Toggle = (props: Props) => {
  const [starred, setStarred] = useState(false);

  return (
    <TogglePrimitive.Root
      defaultPressed={starred}
      onPressedChange={setStarred}
      asChild
    >
      <Button>
        {starred ? (
          <StarFilledIcon className="h-4 w-4 text-yellow-400" />
        ) : (
          <StarIcon />
        )}
        <span className="ml-2 leading-5">{starred ? "Starred" : "Star"}</span>
      </Button>
    </TogglePrimitive.Root>
  );
};

export default Toggle;
