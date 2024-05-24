import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MaterialModule } from '../material.module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { StaticInfoComponent } from './components/static-info/static-info.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from '../core/services/projects.service';
import { CategoriesService } from '../core/services/categories.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { StaticInfoService } from '../core/services/staticInfo.service';

@NgModule({
  declarations: [
    CabinetComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    StaticInfoComponent,
    CategoriesComponent,
    ProjectsComponent,
    StaticInfoComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    ToastModule,
    ButtonModule,
    MaterialModule,
    MatMenuModule,
    InputTextModule,
    AccordionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectsService,
    CategoriesService,
    StaticInfoService
  ],
})
export class CabinetModule {}
