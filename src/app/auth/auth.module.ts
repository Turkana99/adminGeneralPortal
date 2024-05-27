import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from '../dialogs/reset-password/reset-password.component';
import { ToastModule } from 'primeng/toast';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AuthComponent, 
    LoginComponent,
    ResetPasswordComponent
],
  imports: [
    CommonModule,
    AuthRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ToastModule,
    MaterialModule,
    HttpClientModule,
    
],
  providers: [MessageService],
})
export class AuthModule {}
