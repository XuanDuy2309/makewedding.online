import { createContext } from "react";
import { languageType } from "../common/types/Album";

export const LanguageContext = createContext<languageType>({
  geoplugin_city: "",
  updateGeoplugin_city: () => {},
});
