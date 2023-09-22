import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { AuxCardComponent } from './components/aux-card/aux-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { SidecardComponent } from './components/sidecard/sidecard.component';
import { MicroCardComponent } from './components/micro-card/micro-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuTitleComponent,
    MainCardComponent,
    AuxCardComponent,
    HomeComponent,
    ContentComponent,
    SidecardComponent,
    MicroCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
