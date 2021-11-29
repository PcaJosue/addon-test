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
      console.log('addon', addon);
      this.store.dispatch(setAddon({ addon: addon.data.getAddon }));
    }
  }




  save(event) {
    console.log('event', event);
    if (event.action === 'create') this.createAddon(event.addon)
    else if (event.action === 'update') this.updateAddon(event.addon)
  }

  createAddon(addon) {
    this.addonService.createNewAddon(addon).then(apires => {
      console.log('data', apires);
      this.store.dispatch(createAddon({ addon: apires.data.createAddon }));
    }).catch(error => {
      console.log(error);
    })
  }

  update(addon) {
    this.selecting = true;
    this.addonSelected = addon;
    setTimeout(() => {
      this.selecting = false
    }, 100);
  }

  updateAddon(addon) {
    console.log('update', addon);
    this.addonService.updateAddon(addon).then(apires => {
      console.log('data', apires);
      this.store.dispatch(updateAddon({ addon: apires.data.updateAddon }));
    }).catch(error => {
      console.log('error', error);
    })
  }

}
