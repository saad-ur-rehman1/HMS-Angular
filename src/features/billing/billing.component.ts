import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedsService } from '../../services/seeds-services';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  
  
})
export class BillingComponent implements OnInit{
  name:string='Billing'
  billings: any;

  constructor(private seedsService : SeedsService) 
  { }

  ngOnInit() 
  {
    this.billings = this.seedsService.GetBillings();
  }

}