import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TacticsComponent } from './tactics/tactics.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "tactics", component: TacticsComponent},
  {path: "timeline", component: TimelineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
