import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddonService } from './services/addon.service';
import { AddonComponent } from './component/addon/addon.component';
import { FormComponent } from './component/form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AddonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
