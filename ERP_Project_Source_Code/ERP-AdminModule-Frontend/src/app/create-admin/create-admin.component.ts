import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit{

  admin: Admin = new Admin();
  // emailForm : FormGroup;
  // formGroup: FormGroup;
  // dropdownOptions: string[] = ['Java', 'DevOps', 'DotNet'];

  

  constructor(private adminservice : AdminService,
    private router:Router) { }
  ngOnInit(): void {
    // this.emailForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email, emailContainsAtSymbol()]]
    // });
    // this.formGroup = this.formBuilder.group({
    //   department: ['']
    // });
  }
  saveAdmin(){
    this.adminservice.createAdmin(this.admin).subscribe(data =>{
      console.log(data);
        alert("New Admin Added");
        this.goToAdminList();

    });
  }

  goToAdminList(){
    this.router.navigate(['/admins']);
  }

  onSubmit(){
      console.log(this.admin);
      this.saveAdmin();
  }
  

}


