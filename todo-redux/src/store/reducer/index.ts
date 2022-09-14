import { combineReducers } from "redux";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
	lists: reducer
})

export type RootState = ReturnType<typeof rootReducer>