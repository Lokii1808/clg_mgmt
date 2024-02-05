import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
   
insertUser(regapi:any){
  return this.http.post('https://retoolapi.dev/wuAa4p/registerapi',regapi);//registration api
}

getUser(data:any){
   return this.http.get('https://retoolapi.dev/wuAa4p/registerapi'+"?"+data)
 }
}