import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  //  baseUrl:string="/assets/vehicles.json";

  constructor(private httpClient:HttpClient) { }

  getVehicles():Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?limit=10&page=1");
  }

  getVehicle(id:string):Observable<Vehicle>{
    return this.httpClient.get<Vehicle>(this.baseUrl+"/"+id);
  }

  getFilteredVehicles(term:string):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?filter="+term);
  }

  getSortVehicles(column:string, order:string):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  getPagedVehicles(page:number):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?limit=10&page="+page);
  }

  getVehiclesWithParams(term:string,column:string,order:string,page:number):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?filter="+term+"&sortBy="+column+"&order="+order+"&limit=10&page="+page);
  }

  createVehicle(vehicle:Vehicle):Observable<Vehicle>{
    return this.httpClient.post<Vehicle>(this.baseUrl,vehicle);
  }

  editVehicle(id:string,vehicle:Vehicle):Observable<Vehicle>{
    return this.httpClient.put<Vehicle>(this.baseUrl+"/"+id,vehicle);
  }
  
  deleteVehicle(id:string):Observable<Vehicle>{
    return this.httpClient.delete<Vehicle>(this.baseUrl+"/"+id)
  }
}
