import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-createanaccount',
  templateUrl: './createanaccount.component.html',
  styleUrls: ['./createanaccount.component.css']
})
export class CreateanaccountComponent implements OnInit {
  user = new User();

  constructor(private _service :RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    console.log(this.user);
    this._service.registerUserFromRemote(this.user).subscribe(
      data => { console.log("response recieved");
      this.router.navigateByUrl('/VerifyaccountComponent');
    },
      
      error => console.log("exception occured"+error.message)
    );
  }
  
}
