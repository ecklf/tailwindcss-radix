import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      // Update the state with the current value
      setMatches(mediaQuery.matches);
      // Create an event listener
      const handler = (event) => setMatches(event.matches);
      // Attach the event listener to know when the matches value changes
      mediaQuery.addEventListener("change", handler);
      // Remove the event listener on cleanup
      return () => mediaQuery.removeEventListener("change", handler);
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
}
