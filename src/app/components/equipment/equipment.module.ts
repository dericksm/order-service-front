import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { EquipmentComponent } from './equipment.component';
 
export const routes: Routes = [
    { path: '', component: EquipmentComponent },
  ];

  @NgModule({
    declarations: [EquipmentComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
    ]
  })
  export class EquipmentModule { }