import { Component, OnInit } from '@angular/core';
import { SeedsService } from '../../services/seeds-services';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  standalone: true,
  imports:[]
})
export class DoctorComponent {
  name:string='Doctor';
  doctors: any;
  constructor(private seedsService : SeedsService) 
  { }

  ngOnInit() 
  {
    this.doctors = this.seedsService.GetDoctors();
  }

}