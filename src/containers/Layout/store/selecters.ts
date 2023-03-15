/*
*
* Layout selecters
* make by huynq
*/
import rootReducer from "src/redux/root-reducers";

export const selectLayoutStore = ((state: ReturnType<typeof rootReducer>) => state.Layout)