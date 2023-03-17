/*
*
* Template reducers
* make by huynq
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsTemplate, StoreTemplate } from "./types";

const initState : StoreTemplate = { };

const reducersTemplate : Reducer<StoreTemplate, ActionsTemplate> = (state = initState, actions: ActionsTemplate) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersTemplate;