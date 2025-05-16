import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-info-additional-employee',
  imports: [MatButtonModule, MatDividerModule, CommonModule],
  templateUrl: './info-additional-employee.component.html',
  styleUrl: './info-additional-employee.component.css'
})
export class InfoAdditionalEmployeeComponent {
  result: any;

  constructor(
    private employeeService: EmployeeService,
  ) {}

  getHighestSalary() {
    this.employeeService.getEmployeeHighestSalary().subscribe({
      next: (data: any) => {
        this.result = `${data.nombre} ${data.apellido}`;
      },
      error: (err) => {
        console.error('Error loading departments', err);
      }
    });
  }

  getLowestAge() {
    this.employeeService.getEmployeeLowerAge().subscribe({
      next: (data: any) => {
        this.result = `${data.nombre} ${data.apellido}`;
      },
      error: (err) => {
        console.error('Error loading departments', err);
      }
    });
  }

  getCountLastMonth() {
    this.employeeService.getEmployeeCountLastMonth().subscribe({
      next: (data) => {
        this.result = `Empleados que ingresaron el último mes: ${data}`;
      },
      error: (err) => {
        console.error('Error loading departments', err);
      }
    });
  }


}
