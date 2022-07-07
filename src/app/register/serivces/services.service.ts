import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  authState:any =null;
 error :{name:string,message: string} ={name:'',message:''};

  constructor(private afu:AngularFireAuth, private router:Router) {
    this.afu.authState.subscribe((auth =>{
      this.authState = auth;
    }))
   }
   registerWithEmail(email:string,password:string){
     return this.afu.createUserWithEmailAndPassword(email,password).then((user:any)=>{
       this.authState = user
     })
     .catch((error:any)  =>{
      console.log(error)
      throw error
      
    });
    }
}
