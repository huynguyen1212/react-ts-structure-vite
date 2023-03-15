/*
*
* Layout reducers
* make by huynq
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsLayout, StoreLayout } from "./types";

const initState : StoreLayout = { };

const reducersLayout : Reducer<StoreLayout, ActionsLayout> = (state = initState, actions: ActionsLayout) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersLayout;