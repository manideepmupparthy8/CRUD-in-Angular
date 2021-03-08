import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  employees: any = []
  // employees = [{'id':1001, 'position':'Software Developer', 'name':'Manideep', 'Qualification':'B.Tech'},
  // {'id':1002, 'position':'Software Trainee', 'name':'Sahasra', 'Qualification':'BSC(Computers)'},
  // {'id':1003, 'position':'Business Analyst', 'name':'Saaho', 'Qualification':'BBA'},];
  model: any = {};

  constructor() {
  }
  addRecord(data: any) {
    this.employees.push(data)
  }
  // delete(index:any) {
  //   this.employees=this.employees.filter(x =>   this.employees.indexOf(x) !== index)
  //   console.log(this.employees)
  // }
  editRecord(data: any, index: any) {
    console.log(index)
    console.log(data)
    this.employees.forEach((x: any, i: any) => {
      console.log(x)
      if (i == index) {
        x.id = data.id
        x.name = data.name
        x.position = data.position
        x.Qualification = data.Qualification
      }
    })
    console.log(this.employees)
  }
}
