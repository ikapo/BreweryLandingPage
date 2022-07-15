import { useDispatch as useReduxDispatch } from "react-redux";
import type { AppDispatch } from "@/context/store";

export const useAppDispatch: () => AppDispatch = useReduxDispatch;
