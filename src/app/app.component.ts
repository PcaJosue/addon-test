import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddonModel, CreateAddonInput } from './graphql/models';
import { selectAddons } from './reducers';
import { createAddon, setAddon, updateAddon } from './reducers/actions';
import { AddonService } from './services/addon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  addon: AddonModel;

  addonSelected: AddonModel;
  addonList$ = this.store.select(selectAddons);
  selecting: boolean = false;
  constructor(private addonService: AddonService, private store: Store) { }

  ngOnInit() {

    const addonIds = localStorage.getItem('addons');
    if (addonIds) this.fetchAddons(JSON.parse(addonIds));
  }

  async fetchAddons(addonIds) {
    for (let id of addonIds) {
      const addon = await this.addonService.getAddonByID(id);
      this.store.dispatch(setAddon({ addon: addon.data.getAddon }));
    }
  }




  save(event) {
    console.log('event', event);
    if (event.action === 'create') this.createAddon(event.addon)
    else if (event.action === 'update') this.updateAddon(event.addon)
  }

  createAddon(addon) {
    this.addonService.createNewAddon(addon).then(data => {
      console.log('data', data);
      this.store.dispatch(createAddon({ addon: addon.data.createAddon }));
    }).catch(error => {
      console.log(error);
    })
  }

  update(addon) {
    this.selecting = true;
    console.log('addon', addon);
    this.addonSelected = addon;
    console.log('selected', this.addonSelected);
    setTimeout(() => {
      this.selecting = false
    }, 100);
  }

  updateAddon(addon) {
    this.addonService.updateAddon(addon).then(data => {
      console.log('data', data);
      this.store.dispatch(updateAddon({ addon: addon.data.createAddon }));
    }).catch(error => {
      console.log(error);
    })
  }

  deleteAddon(addon) {

  }
}
