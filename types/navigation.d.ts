// import { RootStackParamList } from "types/routing.ts";
import { RootStackParamList } from "../types/routing";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
