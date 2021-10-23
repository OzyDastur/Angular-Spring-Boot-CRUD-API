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

  public getAllEmployees(){
    return this.http.get("http://localhost:8083/api/v1/employees");
  }
  public deleteEmployee(id:number){
    //+ sign means the id is part of the url
    return this.http.delete("http://localhost:8083/api/v1/employees/"+id);
  }

  public creatEmployee(employee:Employee){
    // The comma means passing the employee object
    return this.http.post("http://localhost:8083/api/v1/employees",employee);

  }
  public getEmployeeById(id:number){
    return this.http.get("http://localhost:8083/api/v1/employees/"+id);
  }
  

}
