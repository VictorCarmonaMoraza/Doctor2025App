import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../services/user.service';
import { SharedService } from '../../shared/services/shared.service';
import { Login } from '../interfaces/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin: FormGroup;
  hiddenPassword: boolean = true;
  showLoading: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private sharedService: SharedService
  ) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  /**
   * Iniciar sesion en Login
   */
  startSesion() {
    this.showLoading = true;
    const request: Login = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password
    }
    this.userService.startSesion(request).subscribe({
      next: (resp) => {
        this.sharedService.saveSession(resp);
        this.router.navigate(['layout'])
      },
      complete: () => {
        this.showLoading = false;
      },
      error: (error) => {
        this.sharedService.showAlerts(error.error, 'Error!');
        this.showLoading = false;
      }
    })
  }


}
