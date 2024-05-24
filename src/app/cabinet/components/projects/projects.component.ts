import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectsService } from '../../../core/services/projects.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'description',
    'icon',
    'url',
    'categoryId',
    'edit',
    'delete',
  ];
  showSpinner = false;
  projects: any;
  filterForm: FormGroup;
  pageSize = 10;
  pageIndex = 0;
  totalData: number | undefined;
  hasResponse = false;
  constructor(
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService
  ) {
    this.filterForm = this.formBuilder.group({
      name: [''],
    });
  }
  ngOnInit(): void {
    this.getAllProjects(this.pageSize, this.pageIndex);
  }

  // All project get func.
  getAllProjects(pageSize: number, pageIndex: number) {
    this.projectsService
      .getAllProjects({
        pageSize: pageSize,
        pageIndex: pageIndex + 1,
      })
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.showSpinner = false;
          }, 200);
        })
      )
      .subscribe(
        (response) => {
          this.hasResponse = true;
          this.showSpinner = true;
          this.projects = response.items;
          this.totalData = response.count;
          this.pageSize = response.size;
          this.pageIndex = response.index;
          console.log('dataShow', this.projects);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}
