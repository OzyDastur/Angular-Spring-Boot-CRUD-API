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

    
    //The employees will hold the JSON that will be recieved from the backend 
    employees:any;
    deletedMessage:any = "";
    isDeleted:boolean = false;
    employee:Employee = new Employee("","","");
    
    

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
        this.deletedMessage = "Employee with the id " + id + " was successfully deleted";
      });
     
  }

  // public getEmployeeById(id:number){
  //   let response = this.employeeService.getEmployeeById(id);
  //   response.subscribe(data=>{
  //     this.employee = data;
  //     this.router.navigate(['employee-info']);
  //   })
  // }

  

}
