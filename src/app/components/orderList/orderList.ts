

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EquipType, Order, Status } from 'src/app/entity/Order';
import { OrderService } from 'src/app/services/OrderService';

@Component({
  selector: 'order-service-order-list',
  templateUrl: './orderList.component.html',
  styleUrls: ['./orderList.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  public orders: Order[] = []
  public status = Status

  ngOnInit() {

    this.orderService.getAll()
    .subscribe(res => this.orders = res,
               err => console.log(err))
  }

  

}
