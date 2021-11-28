import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';

import { AddonModel } from '../graphql/models';
import * as actions from './actions';

export const initialState: AddonModel[] = []

const onCreateAddon = (state, { addon }) => {
  console.log('create');
  const addons: any = [...state];
  addons.push(addon);
  localStorage.setItem('addons', JSON.stringify(addons.map(addon => addon.id)))
  return addons;
}

const onSetAddon = (state, { addon }) => {
  const addons: any = [...state];
  addons.push(addon);
  return addons;
}

const onUpdateAddon = (state, { addon }) => {
  const addons: any = [...state];
  const index = addons.findIndex(ad => ad.id === addon.id)
  addons[index] = addon;
  return addons;
}


export const addonReducer = createReducer(
  initialState,
  on(actions.createAddon, onCreateAddon),
  on(actions.setAddon, onSetAddon),
  on(actions.updateAddon, onUpdateAddon)

)

export const selectAddons = createFeatureSelector<ReadonlyArray<AddonModel>>('addons');


