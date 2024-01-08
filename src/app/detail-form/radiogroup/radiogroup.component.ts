import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/signup.service';

@Component({
  selector: 'app-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.scss']
})
export class RadiogroupComponent implements OnInit {
  RadioFormGroup!: FormGroup;
  // personalInfo!: PersonalDetails
  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit(): void {
    this.RadioFormGroup = new FormGroup({
      gender: new FormControl(null, Validators.required)
    })
  }

  next() {
    console.log(this.RadioFormGroup.value)
    // this.personalInfo = this.PersonalDetailForm.value;
    if(this.RadioFormGroup.valid) {
      this.signupService.setRadio(this.RadioFormGroup.value);
      this.router.navigate(['4'])
    }
  }

}
