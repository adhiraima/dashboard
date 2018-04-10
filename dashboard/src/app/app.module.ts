import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MapInfoComponent } from './map-info/map-info.component';
import { InterfaceStatsComponent } from './interface-stats/interface-stats.component';
import { TrafficComponent } from './traffic/traffic.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    MainBodyComponent,
    MapInfoComponent,
    InterfaceStatsComponent,
    TrafficComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQjzCwLrrJYU9Tk7W7MnqcmZYIrCVeHqs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
