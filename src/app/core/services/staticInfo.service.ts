import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class StaticInfoService {
  constructor(private http: HttpClient) {}

  // Get All StaticInfo
  getAllCategories(req: any): Observable<any> {
    return this.http.get<any>(environment.getCategoriesUrl, req);
  }

  // Add new StaticInfo
  addCategory(req: any): Observable<any> {
    return this.http.post<any>(environment.getCategoriesUrl, req);
  }

  // Edit  StaticInfo
  editCategory(req: any): Observable<any> {
    return this.http.put<any>(environment.getCategoriesUrl, req);
  }

  // Get  StaticInfo  with Id
  getCategoryWithId(id: number) {
    return this.http.get<any>(`${environment.getCategoriesUrl}/${id}`);
  }

  // Delete StaticInfo
  deleteCategory(id: number) {
    return this.http.delete<any>(`${environment.getCategoriesUrl}/${id}`);
  }
}
