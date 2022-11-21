import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { LoginstatusService } from '../loginstatus.service';
import { User } from '../user';
=======
>>>>>>> 3947216bfbdfc65954ec157ba6ec413d1a78b599

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
<<<<<<< HEAD
user!:User;
  constructor(private loginStatusService:LoginstatusService) {
    this.loginStatusService.currentUserDetails.subscribe(res=>{
      console.log(res);
      this.user=res;
      console.log(this.user);
    })
   }
=======

  constructor() { }
>>>>>>> 3947216bfbdfc65954ec157ba6ec413d1a78b599

  ngOnInit(): void {
  }

}
