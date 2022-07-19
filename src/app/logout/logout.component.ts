import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginstatusService } from '../loginstatus.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  errorMessage: string = ''
  constructor(public registrationService: RegistrationService,
    private loginStatusService: LoginstatusService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginStatusService.changeLoginStatus(false)


    this.loginStatusService.changeUserStatus({
  id:0, email:'', password:'', enabled: false,
  firstname: '',
  lastname: '',
  dob:'' ,
  gender: '',
  phoneno: 0,
  verificationCode: ''
})
    this.registrationService.logout().subscribe((response) => {
      localStorage.removeItem('user')
      console.log(localStorage.getItem('user'))
      this.router.navigateByUrl('/customerlogin')
    }, (error) => {
      this.errorMessage = "Problem in logout"
    })
  }
}
