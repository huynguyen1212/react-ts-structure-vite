/*
*
* Signup selecters
* make by huynq
*/
import rootReducer from "src/redux/root-reducers";

export const selectSignupStore = ((state: ReturnType<typeof rootReducer>) => state.Signup)