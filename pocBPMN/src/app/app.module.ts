import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftpaneComponent } from './leftpane/leftpane.component';
import { MenubarComponent } from './header/menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftpaneComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
