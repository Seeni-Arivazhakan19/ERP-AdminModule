import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit{
 
  admins : any[];
  // admin:Admin;
  constructor(private adminservice : AdminService, private router:Router){ }

  ngOnInit(): void {
    this.getadmins();
  }
  private getadmins() {
    this.adminservice.getAdminList().subscribe(data => {
      this.admins = data;
    })
  }

  updateAdmin(id:number){
    this.router.navigate(['update-admin',id]);
  }

  deleteAdmin(id:number){
    this.adminservice.deleteAdmin(id).subscribe(data =>{
      alert("Deleted Successfully");
      console.log(data);
      this.getadmins();
    })
  }

  viewAdmin(id:number){
    const admin = this.admins.find(admin => admin.id === id);
    Swal.fire({
     title:'User Details',
    //  text:`${this.router.navigate(['/viewAdmin',id])}`
    html: `<p>name : ${admin.firstname}</p><p>Last name : ${admin.lastname}</p> <p>User name : ${admin.username}</p> <p>Email : ${admin.email}</p> <p>Phone Number : ${admin.phonenumber}</p> <p>Date Of Birth : ${admin.dob}</p> <p>Department : ${admin.department}</p>`
    }).then(() => {
      this.router.navigate(['/viewAdmin', id]);
    });
  
//   Swal.fire({
//   title: 'Do you want to save the changes?',
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: 'Save',
//   denyButtonText: `Don't save`,
// }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//   if (result.isConfirmed) {
//     Swal.fire('Saved!', '', 'success')
//   } else if (result.isDenied) {
//     Swal.fire('Changes are not saved', '', 'info')
//   }
// })
}
}
