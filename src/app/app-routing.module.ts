import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './center-div/layout/layout/layout.component';
import { HomePageComponent } from './center-div/screens/home-page/home-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  //{ path: "**", redirectTo: "home", pathMatch: "full" },

  //center div routing
  { path: "home", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
