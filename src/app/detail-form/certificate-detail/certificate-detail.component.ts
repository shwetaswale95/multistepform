import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Certificate, RegisterFromData } from '../detail.model';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/signup.service';

@Component({
  selector: 'app-certificate-detail',
  templateUrl: './certificate-detail.component.html',
  styleUrls: ['./certificate-detail.component.scss']
})
export class CertificateDetailComponent implements OnInit {

  cmeDetailForm!: FormGroup;
  certificateData!: Certificate;
  formData!: RegisterFromData;
  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit(): void {
    this.formData= this.signupService.getFormData();
    console.log(this.formData)
    this.cmeDetailForm = new FormGroup({
      certificate_name: new FormControl(null, Validators.required)
    })
  }

  next() {
    this.certificateData = this.cmeDetailForm.value
    if(this.cmeDetailForm.valid) {
      this.signupService.setCertificate(this.certificateData);
      // this.router.navigate(['2'])
      this.formData= this.signupService.getFormData();
      console.log(this.formData)
    }
  }

}
