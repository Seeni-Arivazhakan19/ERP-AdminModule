import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit{

  id:number;
  admin:Admin;
  constructor(private route:ActivatedRoute,private adminservice : AdminService) { }

  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];

      this.admin = new Admin();
      this.adminservice.getAdminById(this.id).subscribe(data =>{
        this.admin= data;
      })
  }
}
