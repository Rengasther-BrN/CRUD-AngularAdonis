import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = "http://localhost:3333/auth"

  constructor(private http: HttpClient) { }

  login(formData: FormData): Observable<FormData>{
    return this.http.post <FormData>(this.apiUrl, formData)
  }
}
