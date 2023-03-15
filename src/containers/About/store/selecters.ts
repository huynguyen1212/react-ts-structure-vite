/*
*
* About selecters
* make by huynq
*/

import rootReducer from "src/redux/root-reducers";

export const selectAboutStore = ((state: ReturnType<typeof rootReducer>) => state.About)