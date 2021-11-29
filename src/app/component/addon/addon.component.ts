import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddonModel } from '../../graphql/models';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.scss']
})
export class AddonComponent implements OnInit, AfterViewInit {

  slider1: string = 'slider-1';
  slider2: string = 'slider-2';
  track: string = 'slider-track';

  @Input('addon') addon: AddonModel;
  @Output('onUpdate') onUpdate = new EventEmitter<any>();
  sliderOne: any;
  sliderTwo: any;
  displayValOne: any
  displayValTwo: any
  minGap = 0;
  sliderTrack: any
  sliderMaxValue: any;
  thumb: any
  constructor() { }

  ngOnInit(): void {
    if (this.addon) {
      this.slider1 = `slider-1-${this.addon.id}`
      this.slider2 = `slider-2-${this.addon.id}`
      this.track = `slider-track-${this.addon.id}`
    }
  }



  ngAfterViewInit() {

    this.sliderOne = document.getElementById(this.slider1);
    this.sliderTwo = document.getElementById(this.slider2);;
    this.sliderTrack = document.getElementById(this.track);
    this.sliderMaxValue = this.addon.characteristics[0].value.max

    this.slideOne();
    this.slideTwo();
  }

  slideOne() {
    if (parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap) {
      this.sliderOne.value = parseInt(this.sliderTwo.value) - this.minGap;
    }
    this.fillColor();

  }

  slideTwo() {
    if (parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap) {
      this.sliderTwo.value = parseInt(this.sliderOne.value) + this.minGap;
    }
    this.fillColor();
  }

  sendValues() {
    this.onUpdate.emit({
      action: 'update', addon: {
        author: this.addon.author,
        id: this.addon.id,
        name: this.addon.name,
        characteristics: {
          label: this.addon.characteristics[0].label,
          icon: this.addon.characteristics[0].icon,
          maxLabel: this.addon.characteristics[0].maxLabel,
          medLabel: this.addon.characteristics[0].medLabel,
          minLabel: this.addon.characteristics[0].minLabel,
          value: {
            min: this.sliderOne.value,
            max: this.sliderTwo.value
          }
        },
      }
    })
  }

  fillColor() {
    const percent1 = this.sliderOne.value;
    const percent2 = this.sliderTwo.value;
    this.sliderTrack.style.background = `linear-gradient(90deg, #eeeeee ${percent1}% ,rgba(92, 184, 92, 0.1) ${percent1}% ,#5CB85C 1%, rgba(92, 184, 92, 0.1) ${percent2}%, #eeeeee ${percent2}%)`;
  }

}
