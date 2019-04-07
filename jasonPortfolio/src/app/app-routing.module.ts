import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CanvasComponent } from './components/pages/canvas/canvas.component';
import { VRTherapyComponent } from './components/pages/vrtherapy/vrtherapy.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'canvas', component: CanvasComponent },
  {path: 'VRTherapy', component: VRTherapyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
