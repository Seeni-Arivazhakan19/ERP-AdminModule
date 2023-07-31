import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseURL = 'http://localhost:8080/api/v1/admins';
  constructor(private httpClient : HttpClient) { }

  getAdminList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseURL}`);
  }

  createAdmin(admin:Admin) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,admin);
  }
  getAdminById(id:number): Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseURL}/${id}`);
  }
  updateAdmin(id: number,admin:Admin):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,admin);
  }
  deleteAdmin(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  // viewAdmin()
  getUserData(username:String,password:String){
    return this.httpClient.get(`${this.baseURL}/${username}/${password}`);
  }
  }


