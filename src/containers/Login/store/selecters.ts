/*
*
* Login selecters
* make by huynq
*/
import rootReducer from "src/redux/root-reducers";

export const selectLoginStore = ((state: ReturnType<typeof rootReducer>) => state.Login)