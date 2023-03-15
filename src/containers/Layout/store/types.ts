/*
 *
 * Layout types
 * make by huynq
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreLayout {}

export type ActionsLayout = ActionType<typeof actions>;
