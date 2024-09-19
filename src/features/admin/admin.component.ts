import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IAdmin, SeedsService } from '../../services/seeds-services';
import { AdminCreateComponent } from '../admin-create/admin-create.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, CommonModule, AdminCreateComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  admins: IAdmin[] = [];

  constructor(private seedsService: SeedsService) {}

  ngOnInit() {
    this.admins = this.seedsService.GetAdmins();
  }
}
