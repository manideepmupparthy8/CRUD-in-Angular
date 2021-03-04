import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;

  constructor(private crudService: CrudServiceService,private fb:FormBuilder,private router:Router) {
    this.addForm=this.fb.group({
      id:['',(Validators.required)],
      Name:['',(Validators.required)],
      Position:['',(Validators.required)],
      Qualification:['',(Validators.required)],
    })
  }

  ngOnInit(){

  }
  addRow() {
    const data = {
      "id": this.addForm.controls.id.value,
      "name": this.addForm.controls.Name.value,
      "position": this.addForm.controls.Position.value,
      "Qualification": this.addForm.controls.Qualification.value
    }
    this.crudService.addRecord(data);
    this.router.navigate(['/table'])
  }
  closepop(){
    this.router.navigate(['/table'])
  }

}
