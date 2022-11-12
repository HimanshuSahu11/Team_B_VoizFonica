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
  // id!:number;
  // phoneno!:number;
  // billid!:string;
  // product!:string;
  // plan!:string;
  // rechargedate!:string;
  // amountdue!:number;

  viewbill:Bill={id:0,phoneno:0,billid:'',product:'',plan:'',rechargedate:'',amountdue:0};
  viewbills!:Bill[];
  
  constructor(public _service:RegistrationService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    

  }
  ViewBillform(){
    console.log(this.viewbill.phoneno);
    this._service.getBillByPhoneno(this.viewbill.phoneno).subscribe(
      (data) => { console.log("response recieved");
      this.viewbills=data;
    },
      
      error => console.log("exception occured"+error.message)
    );
    
  }
}
