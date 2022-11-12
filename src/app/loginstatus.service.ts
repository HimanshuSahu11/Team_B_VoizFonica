import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginstatusService {
  private loginStatus = new BehaviorSubject<boolean>(false);
  private userDetails = new BehaviorSubject<User>({ id:0, email:'', password:'', enabled: false,
  firstname: '',
  lastname: '',
  dob:'',
  gender: '',
  phoneno: 0,
  verificationCode: '' });
  currentLoginStatus = this.loginStatus.asObservable();
  currentUserDetails = this.userDetails.asObservable();
  constructor() { }

  changeLoginStatus(status: boolean) {
    this.loginStatus.next(status);
    console.log(this.currentLoginStatus);
  }

  changeUserStatus(userDetails: User) {
    this.userDetails.next(userDetails);
    console.log(this.userDetails);
    console.log(this.currentUserDetails)
  }



}
