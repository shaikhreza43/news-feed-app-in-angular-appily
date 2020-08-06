import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  public fetchUrl = 'https://banking-appi-ly.herokuapp.com/posts';
  public apiData;
  public card1Arr = [];
  public innerCardArr = [];

  fetchDataFromApi = () => {
    this.http.get(this.fetchUrl).subscribe((data) => {
      this.apiData = data;
      // this.card1Arr= data['replies'];
      // if(data['replies'][0]['replies']){
      //   this.innerCardArr = data['replies'][0]['replies'];
      // }
      // console.log(data['replies'][0]['replies']);

      // console.log(this.card1Arr);
    });
  };
}
