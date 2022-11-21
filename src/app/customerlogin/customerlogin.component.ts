import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginstatusService } from '../loginstatus.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  user = new User();
  errorMessage: String = ''
  form: FormGroup = new FormGroup({

    email: new FormControl(''),
    password: new FormControl(''),


  })
  submitted = false;
  constructor(private _service: RegistrationService,
    private loginStatus: LoginstatusService,
    private router: Router,
<<<<<<< HEAD
    private formBuilder: FormBuilder
    ) { }
=======
    private formBuilder: FormBuilder) { }
>>>>>>> 3947216bfbdfc65954ec157ba6ec413d1a78b599


  get f() {

    return this.form.controls;

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required],



    });
  }
  // loginUser() {
  //   this._service.loginUserFromRemote(this.user).subscribe(
  //     data => {
  //       console.log("response recieved");
  //       this.router.navigateByUrl('sucess');
  //     },

  //     error => {
  //       console.log("exception occured");
  //       this.errorMessage = "Invalid Emailid/Password.........Please enter Valid Credential!";
  //     }
  //   );
  // }

  loginUser() {
    console.log(this.user);
    this._service.loginUserFromRemote(this.user).subscribe(
      (Response) => {
        if (Response.enabled == 1) {
          console.log(Response);
          this.loginStatus.changeLoginStatus(true);
          this.loginStatus.changeLoginStatus(Response);
<<<<<<< HEAD
          localStorage.setItem('phoneno',Response.phoneno);
          this.loginStatus.changeUserStatus(Response);
=======
>>>>>>> 3947216bfbdfc65954ec157ba6ec413d1a78b599
          this.router.navigateByUrl('/loginpage');
          this.errorMessage = "Sucessfully logged in!"
        }
        else {
          this.errorMessage = "Already register but not verified.Please Check your inbox for verification"
        }
      }, (error) => {
        console.log("exception occured");
        this.errorMessage = "Invalid Emailid/Password.........Please enter Valid Credential!";
      }
    )
  }
}
