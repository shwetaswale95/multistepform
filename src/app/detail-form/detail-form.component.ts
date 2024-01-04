import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalDetails } from './detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {
  PersonalDetailForm!: FormGroup;
  personalInfo!: PersonalDetails
  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit(): void {
    this.PersonalDetailForm = new FormGroup({
      name: new FormControl(null, Validators.required)
    })
  }

  next() {
    this.personalInfo = this.PersonalDetailForm.value;
    if(this.PersonalDetailForm.valid) {
      this.signupService.setPersonal(this.personalInfo);
      this.router.navigate(['2'])
    }
  }

}
