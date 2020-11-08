import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-add-temp',
  templateUrl: './add-temp.component.html',
  styleUrls: ['./add-temp.component.css']
})
export class AddTempComponent implements OnInit {
  data:any;

  constructor(private _temp:TempService, private router:Router) { }

  createForm:FormGroup;

  ngOnInit() {
    this.createForm=new FormGroup(
      {
        address: new FormControl(),
        fullName: new FormControl(),
        temperature: new FormControl(),
      
        serialNumber: new FormControl()

      }
    )
  }

  createTempData(){
    console.log('Form', this.createForm);
    this._temp.addTempData(this.createForm.value).subscribe(data=>{
      console.log('Created data', data);
    },
    error=>{
      console.log('Error',error);
    })
    this.router.navigate(['/viewData']);
  }

  
}
