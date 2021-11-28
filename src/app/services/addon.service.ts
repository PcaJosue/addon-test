import { Injectable } from '@angular/core';
import { API, graphqlOperation } from '@aws-amplify/api';
import * as mutations from '../graphql/mutations/addon.mutation'
import { CreateAddonInput, UpdateAddonInput } from '../graphql/models'
import * as queries from '../graphql/queries/addon.queries'

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  constructor() { }

  createNewAddon(addon: CreateAddonInput): any {
    return API.graphql(graphqlOperation(mutations.createAddon, { addon: addon }));
  }

  getAddonByID(id: string): any {
    return API.graphql(graphqlOperation(queries.getAddonByID, { id: id }))
  }

  updateAddon(addon: UpdateAddonInput): any {
    return API.graphql(graphqlOperation(mutations.updateAddon, { addon: addon }))
  }
}
