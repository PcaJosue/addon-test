import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AddonModel } from '../../graphql/models';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.scss']
})
export class AddonComponent implements OnInit, AfterViewInit {


  @Input('addon') addon: AddonModel;
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

    this.sliderOne = document.getElementById("slider-1");
    this.sliderTwo = document.getElementById("slider-2");;
    this.sliderTrack = document.querySelector(".slider-track");
    this.sliderMaxValue = this.addon.characteristics[0].value.max;


  }



  ngAfterViewInit() {

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
  fillColor() {
    const percent1 = (this.sliderOne.value / this.sliderMaxValue) * 100;
    const percent2 = (this.sliderTwo.value / this.sliderMaxValue) * 100;
    this.sliderTrack.style.background = `linear-gradient(90deg, #eeeeee ${percent1}% ,rgba(92, 184, 92, 0.1) ${percent1}% ,#5CB85C 50%, rgba(92, 184, 92, 0.1) ${percent2}%, #eeeeee ${percent2}%)`;
  }

}
