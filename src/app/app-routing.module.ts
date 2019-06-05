import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrComponent } from './err/err.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch : "full"
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule"
  },
  {
    path: "profile",
    loadChildren: "./profile/profile.module#ProfileModule"
  },
  {
    path : "**",
    component: ErrComponent,
    pathMatch : "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
