import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FormEmployeeComponent } from '../form-employee/form-employee.component';

@Component({
  selector: 'app-buttons',
  imports: [MatButtonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})

export class ButtonsComponent {
  constructor(private dialog: MatDialog) {}

  openCreateDialogEmployee() {
    const dialogRef = this.dialog.open(FormEmployeeComponent, {
      width: '600px',
      height: '68%',
    });

    return dialogRef;
  }
  
}
