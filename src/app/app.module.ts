import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddonService } from './services/addon.service';
import { AddonComponent } from './component/addon/addon.component';
import { FormComponent } from './component/form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { addonReducer } from './reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    AddonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ addons: addonReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [AddonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
