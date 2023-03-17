/*
*
* Template selecters
* make by huynq
*/
import rootReducer from "src/redux/root-reducers";

export const selectTemplateStore = ((state: ReturnType<typeof rootReducer>) => state.Template)