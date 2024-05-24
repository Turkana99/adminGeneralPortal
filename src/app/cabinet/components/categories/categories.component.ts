import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from '../../../core/services/categories.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  displayedColumns: string[] = ['name'];
  showSpinner = false;
  categories: any;
  filterForm: FormGroup;
  pageSize = 10;
  pageIndex = 0;
  totalData: number | undefined;
  hasResponse = false;
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoriesService
  ) {
    this.filterForm = this.formBuilder.group({
      name: [''],
    });
  }
  ngOnInit(): void {
    this.getAllCategories(this.pageSize, this.pageIndex);
  }

  // All categories get func.
  getAllCategories(pageSize: number, pageIndex: number) {
    this.categoryService
      .getAllCategories({
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
          this.categories = response.items;
          this.totalData = response.count;
          this.pageSize = response.size;
          this.pageIndex = response.index;
          console.log('dataShow', this.categories);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}
