import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  public fetchUrl='https://banking-appi-ly.herokuapp.com/posts';
  public apiData;

  fetchDataFromApi=()=>{
    this.http.get(this.fetchUrl).subscribe(data=>{
      this.apiData=data;
    });
  }


}
