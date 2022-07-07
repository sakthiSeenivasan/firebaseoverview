import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './firestore model';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.css']
})
export class FirestoreComponent implements OnInit {
  employeeForm : FormGroup;
  employeeModelObj : EmployeeModel =new EmployeeModel();
  employeeData:any;
  constructor( private api:ApiService,private fi:AngularFirestore) { 
    this.employeeForm= new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileno:new FormControl('',Validators.required),
      salary:new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
    this.getAllEmployee();
  }

  PostEmployeeDetails(){
    this.employeeModelObj.firstName =this.employeeForm.value.firstName;
    this.employeeModelObj.lastName =this.employeeForm.value.lasttName;
    this.employeeModelObj.email =this.employeeForm.value.email;
    this.employeeModelObj.mobile =this.employeeForm.value.mobile;
    this.employeeModelObj.salary =this.employeeForm.value.salary;
    this.api.PostEmploye(this.employeeModelObj)
    .subscribe(res=>{
    
      alert("Employee Added Sucessfully");
      let ref =document.getElementById('cancel')
      ref?.click();
    },
    err=>{
      alert("something went wrong");
      this.employeeForm.reset();
      this.getAllEmployee();
    }
    )
  }
  add(){
    if (this.employeeForm.valid) {
      this.fi.collection('employee1').add({ 
        firstName: this.employeeForm.value.firstName,
        lastName: this.employeeForm.value.lastName,
        email: this.employeeForm.value.email,
        mobileno: this.employeeForm.value.mobileno,
        salary: this.employeeForm.value.salary,
      });
    }
  }
  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }
  deleteEmployee(row:any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Employee Deleted")
    })
  }
  }

