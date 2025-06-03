import { useEffect } from "react";
import AppRouter from "./configs/routes";
import "./shared/styles/index.scss";
import { setTheme } from "./utils/theme-setter";
import {
  localStorageService,
  LocalStorageVariableName,
} from "./services/local-storage-service";

export function App() {
  useEffect(() => {
    setTheme(
      localStorageService.getValue(LocalStorageVariableName.theme) as string
    );
  }, []);

  
  return <AppRouter />;
}

export default App;
