import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { FormsModule } from '@angular/forms';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterAdminComponent } from './register-admin/register-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminListComponent,
    CreateAdminComponent,
    UpdateAdminComponent,
    ViewAdminComponent,
    LoginComponent,
    RegisterAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
