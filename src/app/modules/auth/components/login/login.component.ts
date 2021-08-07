import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
      }
    )
  }

  login(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password)
      .subscribe(({ data }) => {
        //TODO: Todo es correcto!
        this.router.navigate(['/', 'task'])
        console.log('RES-->', data);

      }, err => {
        //TODO: Algo malo paso
        console.log('ERROR-->', err);
      })
  }


}
