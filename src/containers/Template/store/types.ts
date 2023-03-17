/*
*
* Template types
* make by huynq
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreTemplate {}

export type ActionsTemplate = ActionType<typeof actions>;