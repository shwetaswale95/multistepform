import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/signup.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checkboxFormGroup!: FormGroup;
  techStackList: any = [
    { id: 1, name: 'Angular', code : 'ANG' },
    { id: 2, name: 'Node JS', code : 'NOD' },
    { id: 3, name: 'React', code : 'REA' },
    { id: 4, name: 'Vue', code : 'VUE' },
    { id: 5, name: 'jQuery', code : 'JQU' }
  ];
  constructor(private formBuilder: FormBuilder, private router: Router,
    private signupService: SignupService) { }

  ngOnInit(): void {
    this.checkboxFormGroup = this.formBuilder.group({
      ceList: this.formBuilder.array([], [Validators.required])
    })
  }

  get technologies(): FormArray {
    return this.checkboxFormGroup.get('ceList') as FormArray
  }

  controlOnChange(e: any) {
    if (e.target.checked) {
      this.technologies.push(new FormControl(e.target.value));
    } else {
       const index = this.technologies.controls.findIndex(technology => technology.value === e.target.value);
       this.technologies.removeAt(index);
    }
  }
    
  submit(){
    this.signupService.setCheckBox(this.checkboxFormGroup.value);
    this.router.navigate(['5'])
    console.log(this.checkboxFormGroup.value)
    console.log(this.signupService.getFormData())
  }

}
