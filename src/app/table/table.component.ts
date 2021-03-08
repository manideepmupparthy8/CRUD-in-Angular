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
  errorMsg: string;
  tempData = this.crudService.employees;
  filterValue: any;

  add: any;
  searchText: string;

  constructor(private router: Router, private crudService: CrudServiceService) {
    this.searchText = ''
    this.errorMsg = ''
  }

  ngOnInit() {
    this.employees = this.crudService.employees
  }
    deleteRecord(i: any) {
      this.crudService.employees=this.crudService.employees.filter((x: any) =>   this.employees.indexOf(x) !== i)
      console.log("vxzgfdg");
      this.employees = [];
      this.employees = this.crudService.employees
    }

  editRecord(i: any) {
    this.router.navigate(['/edit', i]);
    sessionStorage.setItem("index", i)
    console.log(i);
  }
  addRecord() {
    this.router.navigate(['/add'])
  }
  // Search Functionality
  filter() {
    this.errorMsg = ''
    this.tempData = this.crudService.employees;
    if (this.filterValue === '' || this.filterValue === undefined) {
      this.employees = this.crudService.employees
      this.errorMsg = "Provide A Non-Empty String Value"
      setTimeout(() => { this.employees = this.crudService.employees, this.errorMsg = '' }, 3000)
    } else if (this.filterValue !== '' || this.filterValue !== undefined) {
      this.tempData = []
      this.employees = this.crudService.employees.filter((x: { id: any; name: string; position: string; Qualification: string; }) => {
        return x.id == this.filterValue || x.name.toLowerCase().match(this.filterValue.toLowerCase())
          || x.position.toLowerCase().match(this.filterValue.toLowerCase()) || x.Qualification.toLowerCase().match(this.filterValue.toLowerCase())
      })
      if (this.employees.length === 0) {
        this.errorMsg = "No Match Found Try With A Different Term"
        setTimeout(() => { this.employees = this.crudService.employees, this.errorMsg = '' }, 3000)
      }
    }
  }
}

