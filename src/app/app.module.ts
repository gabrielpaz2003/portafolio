import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BiographyComponent } from './components/biography/biography.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectSliderComponent } from './components/project-slider/project-slider.component';
import { TechnologyDisplayComponent } from './components/technology-display/technology-display.component';
import { NgxParticlesModule } from '@tsparticles/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BiographyComponent,
    ExperienceComponent,
    ProjectSliderComponent,
    TechnologyDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
