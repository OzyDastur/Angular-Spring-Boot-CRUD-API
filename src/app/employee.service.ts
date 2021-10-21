import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseURL = "http://localhost:8083/api/v1/employees";
  constructor( private http:HttpClient) { }

  getAllEmployees(){
    return this.http.get("http://localhost:8083/api/v1/employees");
  }
  deleteEmployee(id:number){
    return this.http.delete("http://localhost:8083/api/v1/employees/"+id);
  }

}
