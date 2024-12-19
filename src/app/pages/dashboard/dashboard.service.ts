import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })

  export class DashboardService{
    private apiUrl = 'http://localhost:8080/api/buildings';

    constructor(private http: HttpClient) {}
    
    createBuilding(buildingData: any): Observable<any> {
        return this.http.post(this.apiUrl, buildingData);
      }
}