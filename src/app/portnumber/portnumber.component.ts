import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewConnection } from '../new-connection';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-portnumber',
  templateUrl: './portnumber.component.html',
  styleUrls: ['./portnumber.component.css']
})
export class PortnumberComponent implements OnInit {
  connection=new NewConnection();

  constructor(private _service:RegistrationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  connectionform(){
    console.log(this.connection);
    this._service.newconnectionFromRemote(this.connection).subscribe(
      data => { console.log("response recieved");
      this.router.navigateByUrl('');
    },
      
      error => console.log("exception occured")
    );
  }
}
