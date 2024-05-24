import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment";

@Injectable({
    providedIn: 'root',
  })
  export class ProjectsService {
    constructor(private http: HttpClient) {}

    // Get All Project
    getAllProjects(req:any): Observable<any> {
        return this.http.get<any>(environment.getProjectsUrl, req);
      }
  
    // Add new Project
    addProject(req:any): Observable<any> {
      return this.http.post<any>(environment.getProjectsUrl, req);
    }
  
    // Edit  Project
    editProject(req:any): Observable<any> {
      return this.http.put<any>(environment.getProjectsUrl,req);
    }
  
    // Get  Project  with Id
    getProjectWithId(id: number) {
      return this.http.get<any>(`${environment.getProjectsUrl}/${id}`);
    }
  
    // Delete Project
    deleteProject(id: number) {
      return this.http.delete<any>(`${environment.getProjectsUrl}/${id}`);
    }
  }