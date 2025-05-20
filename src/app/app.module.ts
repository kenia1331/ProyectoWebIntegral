import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarBootstrapComponent } from './components/navbar-bootstrap/navbar-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
