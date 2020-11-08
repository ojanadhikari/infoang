import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Temp} from "../model/temp.model";

@Injectable({
  providedIn: 'root'
})
export class TempService {

  constructor(private  _http:HttpClient) { }

  listAllTempData(){
    return this._http.get<Temp[]>("http://localhost:8080/data");
  }

  addTempData(value){
    return this._http.post("http://localhost:8080/data", value);
  }
}
