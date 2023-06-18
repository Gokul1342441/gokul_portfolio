import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class projectservice {

  private apiUrl = 'http://65.0.75.46:3000';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any> {
    const url = `${this.apiUrl}/projects`;
    return this.http.get(url);
  }

}
