import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { DataListComponent } from "./data-list/data-list.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { DataListDepartmentComponent } from "./data-list-department/data-list-department.component";
import { InfoAdditionalEmployeeComponent } from "./info-additional-employee/info-additional-employee.component";
import { ButtonDepartamentComponent } from "./button-departament/button-departament.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, DataListComponent, ButtonsComponent, DataListDepartmentComponent, InfoAdditionalEmployeeComponent, ButtonDepartamentComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'AA';
}
