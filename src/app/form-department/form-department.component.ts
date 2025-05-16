import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { DepartmentService } from '../service/department.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-department',
  imports: [MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, FormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-department.component.html',
  styleUrl: './form-department.component.css'
})
export class FormDepartmentComponent {
  department = {
    nombre: ''
  };

  activeDepartments: any[] = [];
  
  constructor(
    private dialogRef: MatDialogRef<FormDepartmentComponent>,
    private departmentService: DepartmentService
  ) {}

  loadDepartments() {
    this.departmentService.getDepartment().subscribe({
      next: (data: any) => {
        this.department = data;
      },
      error: (err) => {
        console.error('Error loading departments', err);
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    this.departmentService.createDepartment(this.department).subscribe({
      next: (res) => {
        this.dialogRef.close(true);
        window.location.reload();
      },
      error: (err) => {
        console.error('Error al crear empleado:', err);
      }
    });
  }

}
