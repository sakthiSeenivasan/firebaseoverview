import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { identity } from 'rxjs';
import * as bootstrap from 'bootstrap';



declare let $: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fs: AngularFirestore,) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  // const makeRandomCodeAllChars = (length: number) => {
  //   let result = '';
  //   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  //   const charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //   result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  //   }

  save(){

    if (this.userForm.valid) {
      this.fs.collection('Users').add({
   
        
        name: this.userForm.value.name,
        age: this.userForm.value.age,
        address: this.userForm.value.address,
      });
    }
  }
  update(){
  this.fs.collection("Users").doc("ICMvZUEnECT35Z15eAMM").update({
    name: this.userForm.value.name,
    age: this.userForm.value.age,
    address: this.userForm.value.address,
  });
  console.log(this.fs.collection("Users").doc("Q3Yryjw9EjrD0kC3aUIX"))
  }
  addUser() {
    $('#addUserModal').modal('show');
  }
}
