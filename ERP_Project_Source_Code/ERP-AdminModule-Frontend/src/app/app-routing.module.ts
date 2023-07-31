import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:"admins" ,component:AdminListComponent},
  {path:"create-admin", component:CreateAdminComponent},
  {path:"",redirectTo:"admins",pathMatch:"full"},
  {path:"update-admin/:id",component:UpdateAdminComponent},
  {path:"view-admin/:id",component:ViewAdminComponent},
  {path:"register",component:RegisterAdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
