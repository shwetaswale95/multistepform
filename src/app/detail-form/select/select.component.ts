import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  countries = [
    {
      id: 'us',
      name: 'United States'
    },
    {
      id: 'uk',
      name: 'United Kingdom'
    },
    {
      id: 'ca',
      name: 'Canada'
    }
  ];
  form! : FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      country: new FormControl(this.countries)
    });
  }

  submit() {
    console.log(this.form.value)
  }
}
