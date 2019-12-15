import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
 
export const routes: Routes = [
    { path: '', component: SigninComponent },
    { path: 'register', component: RegisterComponent }
  ];

  @NgModule({
    declarations: [SigninComponent, RegisterComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
    ]
  })
  export class SigninModule { }