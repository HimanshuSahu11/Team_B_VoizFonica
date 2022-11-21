import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CorporateloginComponent } from './corporatelogin/corporatelogin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateanaccountComponent } from './createanaccount/createanaccount.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SucessComponent } from './sucess/sucess.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PayComponent } from './pay/pay.component';
import { PortnumberComponent } from './portnumber/portnumber.component';
import { VerifyaccountComponent } from './verifyaccount/verifyaccount.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ViewbillComponent } from './viewbill/viewbill.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { SidebarforloginComponent } from './sidebarforlogin/sidebarforlogin.component';
import { SidebarsearchComponent } from './sidebarsearch/sidebarsearch.component';
import { PopupbillComponent } from './popupbill/popupbill.component';
import { ServicesComponent } from './services/services.component';
import { RechargegatewayComponent } from './rechargegateway/rechargegateway.component';
import { PrepaidcardComponent } from './prepaidcard/prepaidcard.component';
import { PostpaidcardComponent } from './postpaidcard/postpaidcard.component';
import { DonglecardComponent } from './donglecard/donglecard.component';
<<<<<<< HEAD
import { ForgotverificationComponent } from './forgotverification/forgotverification.component';
=======
>>>>>>> 3947216bfbdfc65954ec157ba6ec413d1a78b599


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    CustomerloginComponent,
    CorporateloginComponent,
    ForgotpasswordComponent,
    CreateanaccountComponent,
    PrepaidComponent,
    PostpaidComponent,
    DongleComponent,
    NewpasswordComponent,
    SucessComponent,
    PagenotfoundComponent,
    PayComponent,
    PortnumberComponent,
    VerifyaccountComponent,
    NavbarComponent,
    LogoutComponent,
    LoginpageComponent,
    ViewbillComponent,
    ViewprofileComponent,
    SidebarforloginComponent,
    SidebarsearchComponent,
    PopupbillComponent,
    ServicesComponent,
    RechargegatewayComponent,
    PrepaidcardComponent,
    PostpaidcardComponent,
<<<<<<< HEAD
    DonglecardComponent,
    ForgotverificationComponent
=======
    DonglecardComponent
>>>>>>> 3947216bfbdfc65954ec157ba6ec413d1a78b599
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
