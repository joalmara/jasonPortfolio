import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CanvasComponent } from './components/pages/canvas/canvas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { VRTherapyComponent } from './components/pages/vrtherapy/vrtherapy.component';
import { ResearchCanvasComponent } from './research-canvas/research-canvas.component';
import { PrototypeSliderComponent } from './prototype-slider/prototype-slider.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    CanvasComponent,
    SliderComponent,
    VRTherapyComponent,
    
    ResearchCanvasComponent,
    
    PrototypeSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule.forRoot(),
    Ng2PageScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
