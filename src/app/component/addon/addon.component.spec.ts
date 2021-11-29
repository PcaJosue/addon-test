import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonComponent } from './addon.component';

describe('AddonComponent', () => {
  let component: AddonComponent;
  let fixture: ComponentFixture<AddonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddonComponent],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonComponent);
    component = fixture.componentInstance;
    component.addon = component.addon = {
      characteristics: [{
        icon: 'angle',
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

      id: 'adsf'
    }
    fixture.detectChanges();
  });

  it('should create addon', () => {
    expect(component).toBeTruthy();
  });
});
