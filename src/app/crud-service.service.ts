import { Injectable } from '@angular/core';
// import { Employees } from './employees'

// interface Employees {
//   id: null;
//   name: string;
//   position: string;
//   Qualification: string
// }

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  // employees: Employees[] = Employees;

  employees = [{'id':null, 'position':'', 'name':'', 'Qualification':''}];
  model: any = {};

  constructor() { }
  addRecord(data: any) {
    this.employees.push(data)
  }
  delete(index:any) {
  
    this.employees=this.employees.filter(x =>   this.employees.indexOf(x) !== index)
    console.log(this.employees)
  }
  editRecord(data:any,index:any){
    console.log(index)
    console.log(data)
    this.employees.forEach((x:any,i) => {
      console.log(x)
      if(i == index)
      {
        x.id = data.id
        x.name = data.name
        x.position = data.position
        x.Qualification = data.Qualification
      }
      x=data
    } )

   
    console.log(this.employees)
  }

  }
