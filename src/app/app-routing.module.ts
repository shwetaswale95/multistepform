import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { CertificateDetailComponent } from './detail-form/certificate-detail/certificate-detail.component';
import { RadiogroupComponent } from './detail-form/radiogroup/radiogroup.component';
import { CheckboxComponent } from './detail-form/checkbox/checkbox.component';
import { SelectComponent } from './detail-form/select/select.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: '1', component: DetailFormComponent},
      {path: '2', component: CertificateDetailComponent},
      {path: '3', component: RadiogroupComponent},
      {path: '4', component: CheckboxComponent},
      {path: '5', component: SelectComponent},
      {path: '', redirectTo:'1', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
