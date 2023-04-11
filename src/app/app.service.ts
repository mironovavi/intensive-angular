import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  //функция отправки запроса на backend
  sendQuery(data: any){
    return this.http.post("https://testologia.site/intensive-price", data)
  }
  getData(){
    return this.http.get("https://testologia.site/intensive-data");
  }
}
