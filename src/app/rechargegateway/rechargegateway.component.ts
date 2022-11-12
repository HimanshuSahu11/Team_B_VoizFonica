import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dataplan } from '../dataplan';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-rechargegateway',
  templateUrl: './rechargegateway.component.html',
  styleUrls: ['./rechargegateway.component.css']
})
export class RechargegatewayComponent implements OnInit {

  dataplan:Dataplan={id:0 ,
    rupee:0,
    days:'',
    datadescription:''}
    dataplans!:Dataplan[];

    viewdataplan!:Dataplan[];
  constructor(public _service:RegistrationService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  ViewDataplanform(){
    console.log(this.dataplan.rupee);
    this._service.getDataplanByRupee(this.dataplan.rupee).subscribe(
      (data) => { console.log("response recieved");
      this.dataplans=data;
      console.log(this.dataplan);
    },
      
      error => console.log("exception occured"+error.message)
    );
    
  }
}
