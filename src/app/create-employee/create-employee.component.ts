import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //Template to create employee. This will hold the input from the create-employee form
  employee:Employee = new Employee("","","");
  //Message to display after registration
  createdMessage:string = "";
  isCreated:boolean = false;

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  public createEmployee(){
    let response = this.employeeService.creatEmployee(this.employee);
        response.subscribe(data=>{
          this.employee = data;
          this.router.navigate(['employees']);
          this.createdMessage = "User: " + this.employee.firstName + this.employee + " was successfully created";
          this.isCreated = true;
        })
  }

}
