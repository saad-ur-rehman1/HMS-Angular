import { Component, OnInit } from '@angular/core';
import { SeedsService } from '../../services/seeds-services';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  standalone: true,
  imports:[]
})
export class AppointmentComponent {
  name:string='Appointment'
  appointments: any;

  constructor(private seedsService : SeedsService) 
  { }

  ngOnInit() 
  {
    this.appointments = this.seedsService.GetAppointments();
  }

}
