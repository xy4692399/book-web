import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibraryComponent } from './libraries/libraries.component';
import { RegistersComponent } from './registers/registers.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginsComponent } from './logins/logins.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    RegistersComponent,
    LoginsComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
