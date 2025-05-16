import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { EmployeeService } from '../service/employee.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-data-list',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent implements OnInit {
  displayedColumns: string[] = [
    'nombres',
    'apellidos',
    'edad',
    'rol',
    'salario',
    'fechaIngreso',
    'fechaSalida',
    'estado',
    'departamento',
    'acciones'
  ];

  dataSource: any[] = [];

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getEmployee().subscribe({
      next: (data) => {
        let employeeActive = data.filter((empleado: any) => empleado.estado === true);
        this.dataSource  = employeeActive
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  deleteEmpleado(empleado: any): void {
    if (confirm(`¿Seguro que deseas eliminar a ${empleado.nombre} ${empleado.apellido}?`)) {
      this.employeeService.deleteEmployee(empleado.id).subscribe({
        next: () => {
          console.log('Empleado eliminado');
          window.location.reload();
        },
        error: (err) => {
          console.error('Error al eliminar empleado:', err);
        }
      });
    }
  }
}
