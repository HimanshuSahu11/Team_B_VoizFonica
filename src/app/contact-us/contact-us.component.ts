import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contactus } from '../contactus';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactus=new Contactus();

  constructor(private _service:RegistrationService,
    private router:Router) { }

  ngOnInit(): void {
  }
  contactusform(){
    this._service.contactusFromRemote(this.contactus).subscribe(
      data => { console.log("response recieved");
      this.router.navigateByUrl('');
    },
      
      error => console.log("exception occured")
    );
  }
}
