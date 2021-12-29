import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirestoreComponent } from './firestore/firestore.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'firestore',component:FirestoreComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
