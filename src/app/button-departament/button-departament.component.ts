import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDepartmentComponent } from '../form-department/form-department.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button-departament',
  imports: [MatButtonModule],
  templateUrl: './button-departament.component.html',
  styleUrl: './button-departament.component.css'
})
export class ButtonDepartamentComponent {
  constructor(private dialog: MatDialog) {}

  openCreateDialogDepartment() {
    const dialogRef = this.dialog.open(FormDepartmentComponent, {
      width: '600px',
      height: '25%',
    });
  }
}
