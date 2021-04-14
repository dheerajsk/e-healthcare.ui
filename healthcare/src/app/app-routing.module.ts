import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './shared/components/container/container.component';

const routes: Routes = [
  {
    path: "login", component: ContainerComponent, loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule)
  },
  {
    path: "", component: ContainerComponent, loadChildren: () =>
      import("./home/home.module").then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
