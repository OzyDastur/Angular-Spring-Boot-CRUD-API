import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  employee:Employee = new Employee("","","");
  constructor(private employeeService:EmployeeService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployeeInfo();
  }

  public getEmployeeInfo(){
    let response = this.employeeService.getEmployeeById(this.activatedRoute.snapshot.params.id);
        response.subscribe(data=>{
          this.employee = data;
        })
  }

}
