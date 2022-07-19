import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../bill';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrls: ['./viewbill.component.css']
})
export class ViewbillComponent implements OnInit {
  id!:number;
  phoneno!:number;
  billid!:string;
  product!:string;
  plan!:string;
  rechargedate!:string;
  amountdue!:number;

  viewbill=null;

  constructor(public _service:RegistrationService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  ViewBillform(){
    console.log(this.viewbill);
    this._service.getBillByPhoneno(this.phoneno).subscribe(
      (data) => { console.log("response recieved");
      this.viewbill=data;
    },
      
      error => console.log("exception occured"+error.message)
    );
    
  }
}
