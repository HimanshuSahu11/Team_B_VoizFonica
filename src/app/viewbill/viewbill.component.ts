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
<<<<<<< HEAD
  // id!:number;
  // phoneno!:number;
  // billid!:string;
  // product!:string;
  // plan!:string;
  // rechargedate!:string;
  // amountdue!:number;

  viewbill:Bill={id:0,phoneno:0,billid:'',product:'',plan:'',rechargedate:'',amountdue:0};
  viewbills!:Bill[];
  
=======
  id!:number;
  phoneno!:number;
  billid!:string;
  product!:string;
  plan!:string;
  rechargedate!:string;
  amountdue!:number;

  viewbill=null;

>>>>>>> 3947216bfbdfc65954ec157ba6ec413d1a78b599
  constructor(public _service:RegistrationService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
<<<<<<< HEAD
    

  }
  ViewBillform(){
    console.log(this.viewbill.phoneno);
    this._service.getBillByPhoneno(this.viewbill.phoneno).subscribe(
      (data) => { console.log("response recieved");
      this.viewbills=data;
=======
  }
  ViewBillform(){
    console.log(this.viewbill);
    this._service.getBillByPhoneno(this.phoneno).subscribe(
      (data) => { console.log("response recieved");
      this.viewbill=data;
>>>>>>> 3947216bfbdfc65954ec157ba6ec413d1a78b599
    },
      
      error => console.log("exception occured"+error.message)
    );
    
  }
}
