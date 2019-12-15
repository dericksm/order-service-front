

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EquipType, Order, Status } from 'src/app/entity/Order';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/CustomerService';
import { GlobalAlertService } from 'src/app/services/GlobalAlertService';
import { OrderService } from 'src/app/services/OrderService';
import { Customer } from 'src/app/entity/Customer';
import { User } from 'src/app/entity/User';

@Component({
  selector: 'order-service-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  public formGroup: FormGroup
  public type = EquipType  
  public router: Router
  public id
  public status = Status
  public customers: Customer[] = []

  constructor(private orderService: OrderService, private route: ActivatedRoute, private formBuilder: FormBuilder, private customerService: CustomerService, private alertService: GlobalAlertService, router: Router
    ) {
      this.router = router
    }
  
    ngOnInit() {
      this.createForm()
      this.customerService.getAll().subscribe(
        res => this.customers = res,
        err => console.log(err)
      )
      let id = this.id = this.route.snapshot.queryParamMap.get("id")
      if (id == null) {
      } else {
        this.orderService.getById(id).subscribe(
          res => {this.formGroup.patchValue(res); console.log(res)}
        )
      }
  
    }

  createForm() {
    
    this.formGroup = this.formBuilder.group({
      type: ['', Validators.required],
      brand: ['', Validators.required],
      problem: ['', Validators.required],
      preview: ['', Validators.required],
      customer: ['', Validators.required],
      status: [1, Validators.required],
      price: ['']
    });
  }

  saveOrder() {
    let order: Order = this.formGroup.value
    console.log(order)
    // if (this.id != null) {
    //   order.id = this.id
    //   this.orderService.update(order).subscribe(
    //     res => this.alertService.success("Ordem de serviço atualizada com sucessa"),
    //     err => this.alertService.error("Não foi possível atualizar"),
    //   )
    // } else {
    //   this.orderService.create(order).subscribe(
    //     res => this.alertService.success("Ordem de serviço salva com sucessa"),
    //     err => this.alertService.error("Não foi possível salvar"),
    //   )
    // }

  }

}
