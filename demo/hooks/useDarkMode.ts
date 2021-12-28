import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const containsDarkClass =
        document.documentElement.classList.contains("dark");
      setIsDark(containsDarkClass);
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  return isDark;
};
