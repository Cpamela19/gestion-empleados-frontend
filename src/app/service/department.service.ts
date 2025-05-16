import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly API_URL = "http://localhost:8080/department";

  department: any[];

  constructor(private http: HttpClient) {
    this.department = [];
  }

  getDepartment() {
    return this.http.get<any[]>(this.API_URL);
  }

  createDepartment(departmentData: any) {
    return this.http.post<any>(`${this.API_URL}/create`, departmentData);
  }

  deleteDepartment(departmentId: number) {
    return this.http.delete<any>(`${this.API_URL}/delete/${departmentId}`);
  }

  hasNotEmployees(departmentId: number) {
    return this.http.get<any[]>(`${this.API_URL}/${departmentId}/hasNotEmployees`);
  }
}
