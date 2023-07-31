import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  admin: Admin = new Admin();
  constructor(private adminservice : AdminService,
    private router:Router) {}
  ngOnInit(): void {
    
  }
  saveAdmin(){
    this.adminservice.createAdmin(this.admin).subscribe((data: any) =>{
      console.log(data);
        alert("Registered Successfully");
        this.goToAdminList();

    });
  }

  goToAdminList(){
    this.router.navigate(['']);
  }

  onSubmit(){
      console.log(this.admin);
      this.saveAdmin();
  }

  


}
