import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { DepartmentService } from '../service/department.service';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomDateAdapter } from '../adapters/custom-data-adapter';
import { DateAdapter, MAT_DATE_FORMATS  } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-form-employee',
  imports: [MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatSelectModule, FormsModule],
  providers: [provideNativeDateAdapter(),{ provide: DateAdapter, useClass: CustomDateAdapter }, { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
  templateUrl: './form-employee.component.html',
  styleUrl: './form-employee.component.css'
})
export class FormEmployeeComponent implements OnInit {
  departments: any[] = [];

  activeDepartments: any[] = [];

  selectedDepartment: number = 0;

  employee = {
    nombre: '',
    apellido: '',
    edad: 0,
    rol: '',
    salario: 0,
    fechaIngreso: new Date(),
    fechaSalida: new Date(),
    departamento: ''
  }

  constructor(
    private departmentService: DepartmentService, 
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<FormEmployeeComponent>
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.charCode;
    if (charCode !== 0 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }
  
  loadDepartments() {
    this.departmentService.getDepartment().subscribe({
      next: (data) => {
        this.departments = data;
        this.activeDepartments = this.departments.filter(d => d.estado);
      },
      error: (err) => {
        console.error('Error loading departments', err);
      }
    });
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // los meses son 0-indexados
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  submit() {
    const selectedDept = this.departments.find(dep => dep.id === this.selectedDepartment);

    const payload = {
      ...this.employee,
      fechaIngreso: this.formatDate(this.employee.fechaIngreso),
      fechaSalida: this.employee.fechaSalida ? this.formatDate(this.employee.fechaSalida) : null,
      departamento: selectedDept
    };

    this.employeeService.createEmployee(this.selectedDepartment, payload).subscribe({
      next: (res) => {
        window.location.reload();
      },
      error: (err) => {
        console.error('Error al crear empleado:', err);
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
