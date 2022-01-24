import * as ProgressPrimitive from "@radix-ui/react-progress";
import React, { useEffect } from "react";
import { getRandomArbitrary } from "../utils/math";

interface Props {}

const Progress = (props: Props) => {
  const [progress, setProgress] = React.useState(60);

  useEffect(() => {
    let timerId: null | NodeJS.Timer = null;

    timerId = setInterval(() => {
      const p = Math.ceil(getRandomArbitrary(0, 100) / 10) * 10;
      setProgress(p);
    }, 5000);

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, []);

  return (
    <ProgressPrimitive.Root
      value={progress}
      className="h-3 w-full overflow-hidden rounded-full bg-white dark:bg-gray-900"
    >
      <ProgressPrimitive.Indicator
        style={{ width: `${progress}%` }}
        className="h-full bg-purple-500 duration-300 ease-in-out dark:bg-white"
      />
    </ProgressPrimitive.Root>
  );
};

export default Progress;
