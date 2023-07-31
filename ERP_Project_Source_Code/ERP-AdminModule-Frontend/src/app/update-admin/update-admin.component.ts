import { Component } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent {
  id:number;
  admin: Admin = new Admin();

  constructor(private adminservice : AdminService,
    private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
this.id = this.route.snapshot.params['id'];
    this.adminservice.getAdminById(this.id).subscribe(data =>
      {
        this.admin = data;

      },(error: any) => console.log(error));
  }

  onSubmit(){
    this.adminservice.updateAdmin(this.id,this.admin).subscribe(data =>{
      alert("Updated Successfully");
      this.goToAdminList();

    },error => console.log(error));
  }

  goToAdminList(){
    this.router.navigate(['/admins']);
  }
}

