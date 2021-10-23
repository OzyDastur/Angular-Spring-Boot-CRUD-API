import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee:Employee = new Employee("","","");
 
  
  constructor(private employeeService:EmployeeService, private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.editEmployee();
   
  }

  public editEmployee(){
    let response = this.employeeService.getEmployeeById(this.activatedRouter.snapshot.params.id);
    response.subscribe(data=>{
      this.employee = data;
      console.log(this.employee);
    })
  }

  public updateEmployee(){
    let response = this.employeeService.creatEmployee(this.employee).subscribe(data=>{
      this.employee = data;
      
      this.router.navigate(['employees']);
    })
  }
  
  

}
