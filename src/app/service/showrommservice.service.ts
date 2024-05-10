import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { showrrom } from '../models/aladdineselmi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowrommserviceService {
  baseUrl='http://localhost:3000/showroom'
  constructor(private http:HttpClient) { }
  addshowroom(show:showrrom):Observable<showrrom[]>{
    return this.http.post<showrrom[]>(this.baseUrl,show)
  }
  deleteshowroom(id:any):Observable<showrrom[]>{
    return this.http.delete<showrrom[]>(this.baseUrl+'/'+id)
  
  }
  getshowromm():Observable<showrrom[]>{
    return this.http.get<showrrom[]>(this.baseUrl)
  
  }
  updateshowroom(id:any,appart:showrrom):Observable<showrrom[]>{
    return this.http.put<showrrom[]>(this.baseUrl +'/'+id,appart)
  
  }
  
  getbyidshowroom(id:any):Observable<showrrom[]>{
    return this.http.get<showrrom[]>(this.baseUrl+'/'+id)
  
  }
}
