import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: './components/signin/signin.module#SigninModule',
  },
  {
    path: 'orders', loadChildren: './components/equipment/equipment.module#EquipmentModule'
  },
  {
    path: 'customer', loadChildren: './components/customer/customer.module#CustomerModule'
  },
  {
    path: '', loadChildren: './components/orderList/orderList.module#OrderListModule'
  },
  {
    path: 'orderList', loadChildren: './components/orderList/orderList.module#OrderListModule'
  },
  {
    path: 'customerList', loadChildren: './components/customerList/customerList.module#CustomerListModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
