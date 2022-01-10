import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { CustomerAddEditComponent } from './components/customer/add-edit/customer-add-edit/customer-add-edit.component';
import { CustomerListComponent } from './components/customer/list/customer-list/customer-list.component';
import { InformationComponent } from './components/information/information.component';


const routes: Routes = [
  {path:'information',component:InformationComponent},
  {path:'information-add-edit',component:AddEditComponent},
  {path:'company',component:CustomerListComponent},
  {path:'company-add-edit',component:CustomerAddEditComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
