import { UserService } from './../../services/UserService';
import { User } from './../../entity/User';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalAlertService } from 'src/app/services/GlobalAlertService';
declare var $: any;

@Component({
  selector: 'order-service-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    let user: User = this.formGroup.value
    console.log(user)
    this.service.login(user).subscribe(    
      res=> {
        if(res == true) this.alert.success("Login realizado com sucesso")
        else this.alert.warning("Login ou senha inválidos")
      },
    err => this.alert.error("Não foi possível realizar o login"),)

  }

}
