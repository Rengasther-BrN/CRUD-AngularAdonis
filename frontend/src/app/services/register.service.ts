import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Register } from '../Register';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  private apiUrl = "http://localhost:3333/propertie"

  constructor(private http: HttpClient) { }

  createRegister(formData: FormData): Observable<FormData>{
    return this.http.post <FormData>(this.apiUrl, formData)
  }
}
