import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
 
  user=new User();
  errorMessage:String=''
   form:FormGroup=new FormGroup({

    email:new FormControl(''),
   })
    


  constructor(private _service:RegistrationService,
    private router:Router,
    private FormBuilder:FormBuilder) { }

    get f(){

      return this.form.controls;
  
    }

  ngOnInit(): void {
    this.form=this.FormBuilder.group({

      email:['',Validators.required],
      password: ['', Validators.required],
    });
  }
  forgotUser(){
    this._service.forgotUserFromRemote(this.user).subscribe(
      data => { console.log("response recieved");
      console.log(this.user.email);
      this.router.navigateByUrl('/forgotverification');
    },
      
      error => {console.log("exception occured")
      this.errorMessage="Invalid emailid.........";
  } 
    );
  }

  
}
