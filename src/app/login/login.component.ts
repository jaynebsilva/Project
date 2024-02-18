import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.criarForm();
  }

  criarForm() {
    this.form = this.formBuilder.group({
      email: [''],
      senha: ['']
    });
  }
}


