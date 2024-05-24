import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StaticInfoComponent } from './components/static-info/static-info.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main',
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'static-info',
        component: StaticInfoComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinetRoutingModule {}
