import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiogroupComponent } from './radiogroup.component';

describe('RadiogroupComponent', () => {
  let component: RadiogroupComponent;
  let fixture: ComponentFixture<RadiogroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiogroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiogroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
