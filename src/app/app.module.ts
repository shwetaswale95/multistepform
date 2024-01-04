import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { CertificateDetailComponent } from './detail-form/certificate-detail/certificate-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailFormComponent,
    CertificateDetailComponent
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
