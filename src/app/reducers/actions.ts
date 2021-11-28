import { createAction, props } from '@ngrx/store';
import { AddonModel } from '../graphql/models'


export enum ActionTypes {
    'create' = '[Addon] create',
    'update' = '[Addon] update',
    'delete' = '[Addon] delete',
    'set' = '[Addon] set'
}

export const createAddon = createAction(ActionTypes.create, props<{ addon: AddonModel }>())
export const setAddon = createAction(ActionTypes.set, props<{ addon: AddonModel }>())
export const updateAddon = createAction(ActionTypes.update, props<{ addon: AddonModel }>())
export const deleteAddon = createAction(ActionTypes.delete, props<{ id: string }>())


