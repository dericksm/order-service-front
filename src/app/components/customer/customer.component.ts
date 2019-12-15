

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EquipType } from 'src/app/entity/Order';
import { Customer } from 'src/app/entity/Customer';
import { GlobalAlertService } from 'src/app/services/GlobalAlertService';
import { CustomerService } from 'src/app/services/CustomerService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'order-service-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  public formGroup: FormGroup
  public type = EquipType
  public maskPhone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public id: string
  public router: Router

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private customerService: CustomerService, private alertService: GlobalAlertService, router: Router
  ) {
    this.router = router
  }

  ngOnInit() {
    this.createForm()
    let id = this.id = this.route.snapshot.queryParamMap.get("id")
    if (id == null) {
    } else {
      this.customerService.getById(id).subscribe(
        res => this.formGroup.patchValue(res)
      )
    }

  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      district: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  saveCustomer() {

    let customer: Customer = this.formGroup.value
    if (this.id != null) {
      customer.id = this.id
      this.customerService.update(customer).subscribe(
        res => this.alertService.success("Cliente atualizado com sucesso"),
        err => this.alertService.error("Não foi possível atualizar"),
      )
    } else {
      this.customerService.create(customer).subscribe(
        res => this.alertService.success("Cliente salvo com sucesso"),
        err => this.alertService.error("Não foi possível salvar"),
      )
    }




  }

}
