import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CorporateloginComponent } from './corporatelogin/corporatelogin.component';
import { CreateanaccountComponent } from './createanaccount/createanaccount.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { DongleComponent } from './dongle/dongle.component';
import { DonglecardComponent } from './donglecard/donglecard.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotverificationComponent } from './forgotverification/forgotverification.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PayComponent } from './pay/pay.component';
import { PopupbillComponent } from './popupbill/popupbill.component';
import { PortnumberComponent } from './portnumber/portnumber.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PostpaidcardComponent } from './postpaidcard/postpaidcard.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PrepaidcardComponent } from './prepaidcard/prepaidcard.component';
import { RechargegatewayComponent } from './rechargegateway/rechargegateway.component';
import { ServicesComponent } from './services/services.component';
import { SidebarforloginComponent } from './sidebarforlogin/sidebarforlogin.component';
import { SucessComponent } from './sucess/sucess.component';
import { VerifyaccountComponent } from './verifyaccount/verifyaccount.component';
import { ViewbillComponent } from './viewbill/viewbill.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'contactus' ,component:ContactUsComponent},
  {path: 'customerlogin',component:CustomerloginComponent},
  {path: 'corporatelogin',component:CorporateloginComponent},
  {path: 'createanaccount',component:CreateanaccountComponent},
  {path: 'forgotpassword',component:ForgotpasswordComponent},
  {path: 'prepaid',component:PrepaidComponent},
  {path: 'postpaid',component:PostpaidComponent},
  {path: 'dongle',component:DongleComponent},
  {path: 'newpassword',component:NewpasswordComponent},
  {path: 'sucess',component:SucessComponent},
  {path: 'pagenotfound',component:PagenotfoundComponent},
  {path: 'pay',component:PayComponent},
  {path: 'portnumber',component:PortnumberComponent},
  {path: 'VerifyaccountComponent',component:VerifyaccountComponent},
  {path: 'viewbill', component:ViewbillComponent},
  {path: 'viewprofile', component:ViewprofileComponent},
  {path: 'sidebarforlogin', component:SidebarforloginComponent},
  {path: 'loginpage',component:LoginpageComponent},
  {path: 'popupbill',component:PopupbillComponent},
  {path: 'rechargegateway',component:RechargegatewayComponent},
  {path: 'prepaidcard', component:PrepaidcardComponent},
  {path: 'postpaidcard',component:PostpaidcardComponent},
  {path: 'donglecard', component:DonglecardComponent},
  {path:'services',component:ServicesComponent},
  {path:'forgotverification',component:ForgotverificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
