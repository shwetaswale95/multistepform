import { Injectable } from '@angular/core';
import { Certificate, PersonalDetails, RegisterFromData } from './detail-form/detail.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private registerFromData = new RegisterFromData();

  constructor() { }

   setPersonal(data:PersonalDetails) {
    this.registerFromData.name = data.name;
  }

  setCertificate(data: Certificate) {
    this.registerFromData.certificate = data.certificate_name;
  }

  getFormData(): RegisterFromData {
    return this.registerFromData;
  }
}
