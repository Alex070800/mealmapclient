import {
  localStorageService,
  LocalStorageVariableName,
} from "../services/local-storage-service";

export const setTheme = (theme: string) => {
  let body = document.getElementsByTagName("body")[0];

  if (body) {
    if (theme == undefined) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        theme = "dark";
        localStorageService.setValue(LocalStorageVariableName.theme, theme);
      } else {
        theme = "light";
        localStorageService.setValue(LocalStorageVariableName.theme, theme);
      }
    }
    if (theme === "dark") {
      body.classList.add("dark");
      body.classList.remove("light");
      localStorageService.setValue(LocalStorageVariableName.theme, theme);
    } else if (theme === "light") {
      body.classList.add("light");
      body.classList.remove("dark");
      localStorageService.setValue(LocalStorageVariableName.theme, theme);
    }
  }
};

export const getTheme = () => {
  return localStorageService.getValue<string>(LocalStorageVariableName.theme);
};
