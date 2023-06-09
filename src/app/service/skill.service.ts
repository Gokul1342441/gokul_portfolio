import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl = 'http://13.235.91.237:3000';

  constructor(private http: HttpClient) { }


  getSkills(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/skills`);
  }
}