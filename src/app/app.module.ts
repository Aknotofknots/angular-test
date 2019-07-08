import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomersModule } from './customers/customers.module';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CustomersModule,
    BrowserModule
  ],
  bootstrap: [AppComponent] // this is only needed to start up the app, so it is not needed in other subcomponents to the app, unless those components is used to start up the app
})
export class AppModule { }
