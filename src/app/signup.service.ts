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

  setRadio(data: any) {
    this.registerFromData.gender = data.gender;
  }

  setCheckBox(data: any) {
    this.registerFromData.ceList = data.ceList;
  }

  getFormData(): RegisterFromData {
    return this.registerFromData;
  }
}
