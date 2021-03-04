import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  employees = [{'id':null, 'position':'', 'name':'', 'Qualification':''}];
  model: any = {};

  constructor() { }
  addRecord(data: any) {
    this.employees.push(data)
  }
  delete(id:any) {
    this.employees=this.employees.filter(x => x.id !== id)
    console.log(this.employees)
  }
  editRecord(data:any,id:any){
    console.log(data)
    this.employees.forEach((x:any,i) => {
      if(x.id ===id)
      {
        x.id = data.id
        x.name = data.name
        x.position = data.position
        x.Qualification = data.Qualification
      }
      
    } )
    console.log(this.employees)
  }

  }
