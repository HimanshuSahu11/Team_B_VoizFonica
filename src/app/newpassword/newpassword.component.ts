import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  user=new User();
  errorMessage: String = ''
  form: FormGroup = new FormGroup({

    email: new FormControl(''),
    password: new FormControl(''),

  })
  submitted = false;
  constructor(private _service:RegistrationService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required],



    });
  }
  newpasswordUser(){
    console.log(this.user);
    console.log(localStorage.getItem('email'));
    this.user.email!=localStorage.getItem('email');
    console.log(this.user.email);
    this._service.newpasswordUserFromRemote(this.user).subscribe(
      data => { console.log("response recieved");
      this.router.navigateByUrl('/sucess');
    },
      
      error => console.log("exception occured")
    );
  }

  
  get f() {

    return this.form.controls;

  }
}
