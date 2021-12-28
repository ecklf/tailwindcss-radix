(function () {
  function changeTheme(newTheme) {
    window.__theme = newTheme;
    if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
      // Set Safari status bar color to white
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#fffff");
    } else {
      document.documentElement.classList.add("dark");
      // Set Safari status bar color to gray-900
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#111827");
    }
  }

  var prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  var preferredTheme;

  try {
    // Obtain the local user theme setting if available
    preferredTheme = localStorage.getItem("theme");
  } catch (error) {}

  window.__setPreferredTheme = function (newTheme) {
    if (newTheme !== "system") {
      changeTheme(newTheme);
    } else {
      changeTheme(prefersDarkQuery.matches ? "dark" : "light");
    }

    try {
      localStorage.setItem("theme", newTheme);
    } catch (err) {}
  };

  prefersDarkQuery.addEventListener("change", function (e) {
    // window.__setPreferredTheme(e.matches ? "dark" : "light");
    window.__setPreferredTheme("system");
  });

  if (preferredTheme && preferredTheme !== "system") {
    changeTheme(preferredTheme);
  } else {
    changeTheme(prefersDarkQuery.matches ? "dark" : "light");
  }
})();
