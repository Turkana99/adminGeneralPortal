import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetGuard } from './core/guards/cabinet.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./cabinet/cabinet.module').then((m) => m.CabinetModule),
    canActivate: [CabinetGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
