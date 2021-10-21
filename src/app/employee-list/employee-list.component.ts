import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employees:any;
    message:any = "";
    isDeleted:boolean = false;

  constructor(private employeeService:EmployeeService, private router:Router) { }

  
  ngOnInit(): void {
    this.getAllEmployees();
   
  }
  
  
  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(data =>{
      this.employees = data;
     
    });
  }

  public deleteEmployee(id:number){
   let response= this.employeeService.deleteEmployee(id);
    response.subscribe(data=>{
      this.employees = data;
      this.isDeleted = true;
      this.message = "Employee with the id " + id + " was successfully deleted";
    });
    
   
  }

    

}
