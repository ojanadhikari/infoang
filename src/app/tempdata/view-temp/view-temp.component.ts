import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TempService } from 'src/app/services/temp.service';
import { Temp } from 'src/app/model/temp.model'

@Component({
  selector: 'app-view-temp',
  templateUrl: './view-temp.component.html',
  styleUrls: ['./view-temp.component.css']
})
export class ViewTempComponent implements OnInit {

  data:any;
  temp: Temp[];

  constructor(private tempService:TempService, private router:Router) { }

  ngOnInit() {
    this.listAllTempData();
  }

  listAllTempData(){
    this.tempService.listAllTempData().subscribe(data =>{
      this.data=data;
      this.temp=this.data;
    },
    error=>{console.log('error', error)}
    );
  }

}
