import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {
  model:any={}
  getData:any;
  admins:Admin[];
  constructor(private adminService:AdminService,private router:Router ){}
ngOnInit(): void {
}
loginUser(){

  const username=this.model.username;
  const password=this.model.password;
  this.adminService.getUserData(username,password).subscribe((data:any)=>{
    this.getData=data as boolean;
    if(this.getData==true)
    {
      this.router.navigate(["/admins"]);
    }
    else{
      alert("Invalid Username or Password");
    }
  });
}
}