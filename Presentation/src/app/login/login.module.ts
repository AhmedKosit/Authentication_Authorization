import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { InputsModule } from '@progress/kendo-angular-inputs';
@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DropDownsModule
  ]
})
export class LoginModule { }
