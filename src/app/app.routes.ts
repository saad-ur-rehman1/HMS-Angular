import { Routes } from '@angular/router';
import { DoctorComponent } from '../features/doctor/doctor.component';
import { DepartmentComponent } from '../features/department/department.component';
import { PatientComponent } from '../features/patient/patient.component';
import { AppointmentComponent } from '../features/appointment/appointment.component';
import { BillingComponent } from '../features/billing/billing.component';
import { AdminComponent } from '../features/admin/admin.component';
import { AdminCreateComponent } from '../features/admin-create/admin-create.component';

export const routes: Routes = [
    { path: 'doctor', component: DoctorComponent },
    { path: 'patient', component: PatientComponent },
    { path: 'department', component: DepartmentComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: 'billing', component: BillingComponent },
    {path: 'admin', component: AdminComponent},
    {path: 'admin-create', component: AdminCreateComponent}
];