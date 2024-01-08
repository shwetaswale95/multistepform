import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { CertificateDetailComponent } from './detail-form/certificate-detail/certificate-detail.component';
import { RadiogroupComponent } from './detail-form/radiogroup/radiogroup.component';
import { CheckboxComponent } from './detail-form/checkbox/checkbox.component';
import { SelectComponent } from './detail-form/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailFormComponent,
    CertificateDetailComponent,
    RadiogroupComponent,
    CheckboxComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
