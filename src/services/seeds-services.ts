import { Injectable } from "@angular/core";
import { ADMINS } from "../app/constants/seeds";

@Injectable({
  providedIn: 'root'  
})
export class SeedsService {

//   public GetBooks(): IBook[] {
//     return BOOKS;
 

//     // Existing methods
//     public GetAdmins(): IAdmin[] {
//       return ADMINS;
//    }
   
//    public AddAdmin(admin: IAdmin):  void {
//       ADMINS.push(admin);;
//    }
    public GetDoctors(): IDoctors[] {
        const doctors = [
          {
            id: 1,
            name: 'Dr. Ahmed',
            experience: 10,
            contactNumber: '123-456-7890',
            email: 'ahmed@example.com',
            departmentId: 1,
            specializations: 'Cardiology, Internal Medicine'
          },
          {
            id: 2,
            name: 'Dr. Fatima',
            experience: 8,
            contactNumber: '098-765-4321',
            email: 'fatima@example.com',
            departmentId: 2,
            specializations: 'Neurology, Neurosurgery'
          },
          {
            id: 3,
            name: 'Dr. Ali',
            experience: 5,
            contactNumber: '111-222-3333',
            email: 'ali@example.com',
            departmentId: 3,
            specializations: 'Pediatrics'
          },
          {
            id: 4,
            name: 'Dr. Sarah',
            experience: 12,
            contactNumber: '555-666-7777',
            email: 'sarah@example.com',
            departmentId: 1,
            specializations: 'Cardiology'
          }
        ];
        return doctors;
    }

    public GetPatients(): IPatient[] {
        const patients = [
          {
            id: 1,
            name: 'John Doe',
            age: 45,
            gender: 'Male',
            contactNumber: '123-111-7890',
            doctorId: 1,
            addressId: 101
          },
          {
            id: 2,
            name: 'Jane Smith',
            age: 34,
            gender: 'Female',
            contactNumber: '234-222-7890',
            doctorId: 2,
            addressId: 102
          },
          {
            id: 3,
            name: 'Alice Johnson',
            age: 29,
            gender: 'Female',
            contactNumber: '345-333-7890',
            doctorId: 3,
            addressId: 103
          }
        ];
        return patients;
    }

    public GetDepartments(): IDepartments[] {
        const departments = [
          {
            id: 1,
            name: 'Cardiology',
            headOfDepartment: 'Dr. Ahmed',
            contactNumber: '123-456-0000',
            doctors: 
              'name: Dr. Ahmad, name: Dr. Sarah'
            
          },
          {
            id: 2,
            name: 'Neurology',
            headOfDepartment: 'Dr. Fatima',
            contactNumber: '987-654-0000',
            doctors: 'name: Dr. Fatima, name: Dr. Farhan'
          },
          {
            id: 3,
            name: 'Pediatrics',
            headOfDepartment: 'Dr. Ali',
            contactNumber: '222-333-0000',
            doctors: 'name: Dr. Ali, name: Dr. Shumaila'
          }
        ];
        return departments;
    }

    // New methods for Billing and Appointment
    public GetBillings(): IBillings[] {
        const billings = [
          {
            id: 1,
            patientId: 1,
            doctorId: 1,
            amount: 200.00,
            billingDate: '2024-09-01'
          },
          {
            id: 2,
            patientId: 2,
            doctorId: 2,
            amount: 150.00,
            billingDate: '2024-09-05'
          },
          {
            id: 3,
            patientId: 3,
            doctorId: 3,
            amount: 180.00,
            billingDate: '2024-09-10'
          }
        ];
        return billings;
    }

    public GetAppointments(): IAppointments[] {
        const appointments = [
          {
            id: 1,
            patientId: 1,
            doctorId: 1,
            appointmentDate: '2024-09-01',
            purpose: 'Routine Checkup'
          },
          {
            id: 2,
            patientId: 2,
            doctorId: 2,
            appointmentDate: '2024-09-06',
            purpose: 'Neurological Examination'
          },
          {
            id: 3,
            patientId: 3,
            doctorId: 3,
            appointmentDate: '2024-09-12',
            purpose: 'Pediatric Consultation'
          }
        ];
        return appointments;
    }
}
export interface IDoctors{
            id: number,
            name: string,
            experience: number,
            contactNumber: string,
            email: string,
            departmentId: number,
            specializations: string
}
export interface IPatient{
            id: number,
            name: string,
            age: number,
            gender: string,
            contactNumber: string,
            doctorId: number,
            addressId: number
            
}
export interface IDepartments{
  id: number,
  name: string,
  headOfDepartment: string,
  contactNumber: string,
  doctors: string

}
export interface IBillings{
  id: number,
  patientId: number,
  doctorId: number,
  amount: number,
  billingDate: string
}
export interface IAppointments{
            id: number,
            patientId: number,
            doctorId: number,
            appointmentDate: string,
            purpose: string
}
export interface IAdmin {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  yearPublished: number;
  checkedOut: boolean;
  isPermanentCollection: boolean;
  createdAt: string;
}
