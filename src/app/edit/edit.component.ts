import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup
  employees: any = [];
  editId: any;
  editData: any = []
  rowData: any;
  constructor(private crudService: CrudServiceService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.editId = +this.route.snapshot.params.id;
    console.log(this.editId)
    this.editData = this.crudService.employees.filter(x => x.id == this.editId)
    console.log(this.editData)
    this.editForm = this.fb.group({
      id: ['', (Validators.required)],
      Name: ['', (Validators.required)],
      Position: ['', (Validators.required)],
      Qualification: ['', (Validators.required)],
    })
  }

  ngOnInit() {
    this.employees = this.crudService.employees
    this.rowData = this.employees.filter((x: { id: any; }) => x.id === this.editId)
    console.log("row data", this.rowData)
    this.editForm.controls.id.patchValue(this.rowData[0].id)
    this.editForm.controls.Name.patchValue(this.rowData[0].name)
    this.editForm.controls.Position.patchValue(this.rowData[0].position)
    this.editForm.controls.Qualification.patchValue(this.rowData[0].Qualification)
  }

  update() {
    const data = {
      "id": this.editForm.controls.id.value,
      "name": this.editForm.controls.Name.value,
      "position": this.editForm.controls.Position.value,
      "Qualification": this.editForm.controls.Qualification.value
    }
    console.log(data);

    this.crudService.editRecord(data, this.editId);
    this.router.navigate(['/table'])
  }

  closepop() {
    this.router.navigate(['/table'])
  }

}
