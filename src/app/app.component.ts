import { Component } from '@angular/core';
import { AddonModel, CreateAddonInput } from './graphql/models';
import { AddonService } from './services/addon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Addon';
  addon: AddonModel;

  addonSelected: AddonModel;
  addonList: AddonModel[];

  constructor(private addonService: AddonService) {
    this.addon = {
      characteristics: [{
        label: 'angle',
        maxLabel: 'directly above',
        medLabel: '',
        minLabel: 'Front on',
        value: {
          max: 100,
          min: 0
        }
      },
      {
        label: 'angle',
        maxLabel: 'directly above',
        medLabel: '',
        minLabel: 'Front on',
        value: {
          max: 80,
          min: 20
        }
      }],
      name: 'Addon ABCD',
      author: 'Josue Pacheco',
      icon: 'angle',
      id: 'adsf'
    }
  }

  saveAddon() {

    const newAddon: CreateAddonInput = {
      characteristics: [{
        label: 'angle',
        maxLabel: 'directly above',
        medLabel: '',
        minLabel: 'Front on',
        value: {
          max: 100,
          min: 0
        }
      }],
      name: 'Addon ABCD',
      author: 'Josue Pacheco',
      icon: 'angle'
    }
    this.addonService.createNewAddon(newAddon).then(data => {
      console.log('data', data);
    }).catch(error => {
      console.log(error);
    })
  }

  getAddon() {
    this.addonService.getAddonByID('test').then(apires => {
      console.log('data', apires);
      this.addon = apires.data.getAddon;
    }).catch(error => {
      console.log(error);
    })
  }

  updateAddon() {
    this.addonService.updateAddon(this.addon).then(data => {
      console.log('data', data);
    }).catch(error => {
      console.log(error);
    })
  }
}
