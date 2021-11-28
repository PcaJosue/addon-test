import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddonModel } from 'src/app/graphql/models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  error: string;

  @Input('addon') addon: any;
  @Output('onSave') onSave = new EventEmitter<any>();
  constructor() { }


  ngOnInit(): void {
    if (this.addon?.id) {
      this.form = new FormGroup({
        id: new FormControl(this.addon.id),
        name: new FormControl(this.addon.name, [Validators.required]),
        author: new FormControl(this.addon.author),
        icon: new FormControl(this.addon.icon, [Validators.required]),
        label: new FormControl(this.addon.characteristics[0].label, [Validators.required]),
        maxLabel: new FormControl(this.addon.characteristics[0].maxLabel),
        medLabel: new FormControl(this.addon.characteristics[0].medLabel),
        minLabel: new FormControl(this.addon.characteristics[0].minLabel),
        max: new FormControl(this.addon.characteristics[0].value.max, [Validators.required]),
        min: new FormControl(this.addon.characteristics[0].value.min, [Validators.required])
      })
    } else {
      this.form = new FormGroup({
        id: new FormControl(),
        name: new FormControl('', [Validators.required]),
        author: new FormControl(),
        icon: new FormControl('angle', [Validators.required]),
        label: new FormControl('', [Validators.required]),
        maxLabel: new FormControl(''),
        medLabel: new FormControl(''),
        minLabel: new FormControl(''),
        max: new FormControl(100, [Validators.required]),
        min: new FormControl(0, [Validators.required])
      })
    }
  }

  save() {
    if (this.form.invalid) {
      this.error = `please fill all required fields`
      return;
    }

    const addonObject: any = {
      author: this.form.value.author,
      characteristics: {
        label: this.form.value.label,
        maxLabel: this.form.value.maxLabel,
        medLabel: this.form.value.medLabel,
        minLabel: this.form.value.minLabel,
        value: {
          min: this.form.value.min,
          max: this.form.value.max
        }
      },
      icon: this.form.value.icon,
      name: this.form.value.name
    }

    if (this.form.value.id) {
      addonObject.id = this.form.value.id
      this.onSave.emit({ action: 'update', addon: addonObject })
    }
    else {
      this.onSave.emit({ action: 'create', addon: addonObject })
    }
    this.form.reset();


  }

}
