import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from '../features/doctor/doctor.component';
import { PatientComponent } from '../features/patient/patient.component';
import { DepartmentComponent } from '../features/department/department.component';
import { AppointmentComponent } from '../features/appointment/appointment.component';
import { BillingComponent } from '../features/billing/billing.component';
import { AdminComponent } from '../features/admin/admin.component';
import { AdminCreateComponent } from '../features/admin-create/admin-create.component';
import { BookComponent } from '../features/book/book.component';



@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, CommonModule,RouterLink, RouterLinkActive, DoctorComponent, PatientComponent, DepartmentComponent, AppointmentComponent, BillingComponent,AdminComponent,AdminCreateComponent, BookComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'HMS';
}