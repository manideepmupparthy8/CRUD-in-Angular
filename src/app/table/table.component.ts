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
  deleteRecord(id: any) {
    this.crudService.delete(id)
    console.log("vxzgfdg");
    this.employees = [];
    this.employees = this.crudService.employees
  }

  editRecord(id: any) {
    this.router.navigate(['/edit', id]);
    console.log(id);
  }
  addRecord() {
    this.router.navigate(['/add'])
  }
}
