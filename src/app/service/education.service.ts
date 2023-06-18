import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiUrl = 'http://65.0.75.46:3000';

  constructor(private http: HttpClient) { }

  getEducationBackgrounds(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/education-background`);
  }
}
