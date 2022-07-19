import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Contactus } from './contactus';
import { NewConnection } from './new-connection';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private user = new BehaviorSubject<any>(localStorage.getItem('user'))

  constructor(private _http: HttpClient) { }

  // login(user: User): Observable<any> {
  //   return this._http.post("http://localhost:8080/user/login", user)
  // }

  public loginUserFromRemote(user: User): Observable < any > {
    return this._http.post("http://localhost:8080/user/login", user)
  }

  logout(): Observable<any> {
    return this._http.delete("http://localhost:8080/user/logout");
  }

  get currentUserName() {
    return this.user.asObservable();
  }
 
  public registerUserFromRemote(user: User): Observable < any > {
  console.log(user)
    return this._http.post("http://localhost:8080/user/createlogin", user)
}

  public forgotUserFromRemote(user: User): Observable < any > {
  return this._http.post("http://localhost:8080/user/forgotlogin", user)
}

  public contactusFromRemote(contactus: Contactus): Observable < any > {
  console.log(contactus)
    return this._http.post("http://localhost:8080/newconnection", contactus)
}

  public newpasswordUserFromRemote(user: User): Observable < any > {
  
    console.log(user);
  return this._http.put("http://localhost:8080/user/newpassword", user)
}

public newconnectionFromRemote( connection: NewConnection): Observable < any > {
  console.log(connection)
    return this._http.post("http://localhost:8080/new/connection", connection)
}
getBillByPhoneno(phoneno:number):Observable<any>{
  return this._http.get("http://localhost:8080/bill/getbill/"+phoneno);
}
}
