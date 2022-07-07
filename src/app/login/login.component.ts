import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../register/serivces/services.service';
import { AngularFirestore } from '@angular/fire/firestore';
declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: any;
  loginForm: FormGroup;
  email: any;
  password: any;
  username: any;
  errorMessage = "";
 
  
  constructor(private router: Router, private db: AngularFirestore) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  async addProducts() {
    if (this.loginForm.valid) {
      const data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      $('#successModal').modal('show');
      await this.db.collection('Employee').add(data)
    }
  }
  gotoProducts() {
    this.router.navigate(['/products'])
  }
  onSub() {
    console.log(this.loginForm)
  }
  getControl() {
    return this.loginForm.controls;
  }
  login() {
    alert("login form working");
  }
}






