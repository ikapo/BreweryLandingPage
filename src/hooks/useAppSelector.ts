import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import type { RootState } from "@/context/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
