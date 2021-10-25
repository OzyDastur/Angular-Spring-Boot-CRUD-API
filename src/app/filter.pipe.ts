import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //value is the list to be filtered
  transform(value: any, sName:string): any {

    if(sName===""){
      return value;
    }

    //create an array to hold the list
    const employeeArray:Employee[] = [];

    for(let i=0; i<=value.length; i++){
      let employeeName = value[i].name;
      if(employeeName.startsWith(sName)){
        employeeArray.push(value[i]);
      }
    }
    return employeeArray;
  }

}
