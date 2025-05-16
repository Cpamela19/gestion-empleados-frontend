import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-data-list-department',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './data-list-department.component.html',
  styleUrl: './data-list-department.component.css'
})
export class DataListDepartmentComponent {

  displayedColumns: string[] = [
    'nombre',
    'estado',
    'acciones'
  ];

  dataSource: any[] = [];

  constructor(public departmentService: DepartmentService) {}

  /**
   * 
   */
  ngOnInit(): void {
    this.getDepartment();
  }

  /**
   * 
   */
  getDepartment() {
    this.departmentService.getDepartment().subscribe({
      next: (data) => {
        let departmentActive = data.filter((department: any) => department.estado === true);
        this.dataSource  = departmentActive
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  /**
   * 
   * @param department 
   */
  deleteDepartment(department: any): void {
    if (confirm(`¿Seguro que deseas eliminar el departamento ${department.nombre}`)) {
      this.departmentService.hasNotEmployees(department.id).subscribe({
        next: (hasNotEmployees) => {
          if (!hasNotEmployees) {
            alert('No se puede eliminar, hay empleados asociados al departamento.');

          } else {
            this.departmentService.deleteDepartment(department.id).subscribe({
              next: () => {
                console.log('Departamento eliminado');
                window.location.reload();
              },

              error: (err) => {
                console.error('Error al eliminar departamento:', err);

                alert('Error al eliminar el departamento.');
              }
            });
          }
        },
        error: (err) => {
          console.error('Error al eliminar departamento:', err);
        }
      });
    }
  }
}
