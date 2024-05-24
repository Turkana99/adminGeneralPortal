import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  // Get All Category
  getAllCategories(req: any): Observable<any> {
    return this.http.get<any>(environment.getCategoriesUrl, req);
  }

  // Add new Category
  addCategory(req: any): Observable<any> {
    return this.http.post<any>(environment.getCategoriesUrl, req);
  }

  // Edit  Category
  editCategory(req: any): Observable<any> {
    return this.http.put<any>(environment.getCategoriesUrl, req);
  }

  // Get  Category  with Id
  getCategoryWithId(id: number) {
    return this.http.get<any>(`${environment.getCategoriesUrl}/${id}`);
  }

  // Delete Category
  deleteCategory(id: number) {
    return this.http.delete<any>(`${environment.getCategoriesUrl}/${id}`);
  }
}
