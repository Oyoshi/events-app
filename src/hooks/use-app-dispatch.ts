import { useDispatch } from "react-redux";
import type { AppDispatch } from "store/store.interface";

export const useAppDispatch = () => useDispatch<AppDispatch>();
