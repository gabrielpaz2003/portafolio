import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BiographyComponent } from './components/biography/biography.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectSliderComponent } from './components/project-slider/project-slider.component';
import { TechnologyDisplayComponent } from './components/technology-display/technology-display.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectSliderComponent },
  { path: 'technologies', component: TechnologyDisplayComponent },
  { path: 'contact', component: ContactComponent },
  // Puedes añadir más rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
