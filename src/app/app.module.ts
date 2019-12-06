import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  imports: [
    CustomersModule,
    BrowserModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent] // this is only needed to start up the app, so it is not needed in other subcomponents to the app, unless those components is used to start up the app
})
export class AppModule { }
