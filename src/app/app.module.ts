import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { DescriptionComponent } from './components/description/description.component';
import { ServicesComponent } from './components/services/services.component';
import { AmennitiesComponent } from './components/amennities/amennities.component';
import { StoreComponent } from './components/store/store.component';
import { TeamComponent } from './components/team/team.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerComponent,
    DescriptionComponent,
    ServicesComponent,
    AmennitiesComponent,
    StoreComponent,
    TeamComponent,
    StatisticsComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
