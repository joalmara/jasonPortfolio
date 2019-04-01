import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CanvasComponent } from './components/pages/canvas/canvas.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'canvas', component: CanvasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
