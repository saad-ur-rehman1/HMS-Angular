import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IAdmin, SeedsService } from '../../services/seeds-services';

@Component({
  selector: 'app-admin-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-create.component.html',
  styleUrl: './admin-create.component.css'
})
export class AdminCreateComponent implements OnInit {

  adminForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required]
  });
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private seedsService: SeedsService
  ) {
    
  }

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.adminForm.valid) {
      const newAdmin: IAdmin = {
        id: Date.now(), // Generate a unique ID (you might want to use a more robust method in a real application)
        ...this.adminForm.value
      };
      this.seedsService.AddAdmin(newAdmin);
      this.router.navigate(['/admin']);
    }
  }
}
