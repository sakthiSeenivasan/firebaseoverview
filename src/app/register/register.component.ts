import { Component, OnInit } from '@angular/core';
import { ServicesService } from './serivces/services.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // email = "";
  // password = "";
  // conformpassword = "";
  registerForm: FormGroup;
  message = "";
  errorMessage = "";
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(private srv: ServicesService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };

  }

  register() {
    this.clearErrorMessage();
    // if(this.validateForm(this.email,this.password))
    // {
    this.srv.registerWithEmail(this.registerForm.controls.email.value, this.registerForm.controls.password.value)
      .then(() => {
        console.log(this.registerForm);
        this.message = "you are register Successfully ";
      }).catch((error: any) => {
        this.error = error;
        // this.router.navigate[('/userinfo')]
        // this.router.navigate[('/register')]
      })
    // }

  }
  // validateForm(email:any , password:any){
  //   if(email.length===0){
  //     this.errorMessage ="Please enter email id";
  //     return false;
  //   }
  //   if(password.length===0){
  //     this.errorMessage ="Please enter password";
  //     return false;
  //   }
  //   if(password.length < 6){
  //     this.errorMessage ="password should be at least 6 char";
  //     return false;
  //   }

  //   this.errorMessage ='';
  //   return true;

  // }
  gotoFire(){
    this.router.navigate(['/firestore'])
  }

  timeout() {
    setTimeout(() => {
      console.log('12');
    }, 5000);

  }
}
