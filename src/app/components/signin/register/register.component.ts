import { UserService } from '../../../services/UserService';
import { User } from '../../../entity/User';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalAlertService } from 'src/app/services/GlobalAlertService';
declare var $: any;

@Component({
  selector: 'order-service-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public logged = false;
  public formGroup: FormGroup

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private service: UserService,
    private alert: GlobalAlertService
    ) { }

  ngOnInit() {

    this.renderer.addClass(document.body, "hold-transition");
    this.renderer.addClass(document.body, "login-page");
    this.createForm()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(){
    let user: User = this.formGroup.value
    localStorage.setItem('user', JSON.stringify(user))
    this.service.create(user).subscribe(
      res=> this.alert.success("Usuário criado com sucesso"),
    err => this.alert.error("Não foi possível criar o usuário"),)

  }

}
