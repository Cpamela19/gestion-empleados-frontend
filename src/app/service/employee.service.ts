import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly API_URL = "http://localhost:8080/employee";

  employee: any[];

  constructor(private http: HttpClient) {
    this.employee = [];
  }

  getEmployee() {
    return this.http.get<any[]>(this.API_URL);
  }

  createEmployee(departmentId: number, employeeData: any) {
    return this.http.post<any>(`${this.API_URL}/create/${departmentId}`, employeeData);
  }

  deleteEmployee(employeeId: number) {
    return this.http.delete<any>(`${this.API_URL}/delete/${employeeId}`);
  }

  getEmployeeHighestSalary() {
    return this.http.get<any[]>(`${this.API_URL}/highestSalary`);
  }

  getEmployeeLowerAge() {
    return this.http.get<any[]>(`${this.API_URL}/lowerAge`);
  }

  getEmployeeCountLastMonth() {
    return this.http.get<any[]>(`${this.API_URL}/countLastMonth`);
  }
}
