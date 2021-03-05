import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  employees: any = [];
  add: any;
  searchText: string;

  constructor(private router: Router, private crudService: CrudServiceService) {
    this.searchText=''
   }

  ngOnInit() {
    this.employees = this.crudService.employees
  }
  deleteRecord(i: any) {
    this.crudService.delete(i)
    console.log("vxzgfdg");
    this.employees = [];
    this.employees = this.crudService.employees
  }

  editRecord(i: any) {
    this.router.navigate(['/edit', i]);
    sessionStorage.setItem("index",i)
    console.log(i);
  }
  addRecord() {
    this.router.navigate(['/add'])
  }
}
