import { Component, OnInit } from '@angular/core';
import { SeedsService } from '../../services/seeds-services';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  standalone:true
})
export class PatientComponent {
  name:string='Patient'
  patients: any;
  constructor(private seedsService : SeedsService) { }

  ngOnInit() 
  {
    this.patients = this.seedsService.GetPatients();
  }

}