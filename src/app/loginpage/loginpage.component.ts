import { Component, OnInit } from '@angular/core';
import { LoginstatusService } from '../loginstatus.service';
import { User } from '../user';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
user!:User;
  constructor(private loginStatusService:LoginstatusService) {
    this.loginStatusService.currentUserDetails.subscribe(res=>{
      console.log(res);
      this.user=res;
      console.log(this.user);
    })
   }

  ngOnInit(): void {
  }

}
