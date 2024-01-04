import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { CertificateDetailComponent } from './detail-form/certificate-detail/certificate-detail.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: '1', component: DetailFormComponent},
      {path: '2', component: CertificateDetailComponent},
      {path: '', redirectTo:'1', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
