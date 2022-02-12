import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../shared/login';
import{AuthService}from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  isSubmitted = false;

  error = '';

  loginUser: any = new Login();


  constructor(
    private formBuilder: FormBuilder,

    private router: Router,

    private authService: AuthService
  ) { }

  ngOnInit(): void {
    //Create a Reactive Form Model

    this.loginForm = this.formBuilder.group({



      //Form controlName fields

      UserName: ['',[Validators.required]],

      Password: ['',[Validators.required]]

    });

  }

  //Get controls for validation
  get formControls() { return this.loginForm.controls; }

  //Login Verification
  loginCredentials() {
    this.isSubmitted = true;
    console.log("Submitted form for credentials");


    if (this.loginForm.valid) {
      console.log("Submitted Form is valid");
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe(
        data => {
          this.error='';
          console.log(data);
          this.loginUser = data;

          //Username, Role and Token

          sessionStorage.setItem('JwtTOKEN', this.loginUser.token);

          //Check the role based and redirects to respective pages
          if (this.loginForm.value.UserName == "binitha"&&
          this.loginForm.value.Password=='password') {

            console.log("Redirecting to Admin Page");
            localStorage.setItem("USERNAME", this.loginUser.UserName);
            this.router.navigateByUrl('/admin');
          }
          else if (this.loginForm.value.UserName == "binitha"&&
          this.loginForm.value.Password=='binitha') {

            console.log("Redirecting to User Page");
            localStorage.setItem("USERNAME", this.loginUser.UserName);
            this.router.navigateByUrl('/user');
          }

          else {
            this.error = "You are not authorized to access this page.";
           }
        },
        error => {
          this.error = "Invalid username or password! try again...";
          console.log(error);
        }
      );
}else {
  console.log("Form is invalid");
  console.log(this.loginForm.value);
   }
  }

}
