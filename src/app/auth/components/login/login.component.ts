// login.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { ResetPasswordComponent } from '../../../dialogs/reset-password/reset-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showSpinner = false;
  @ViewChild('username', { static: false }) usernameElement:
    | ElementRef
    | undefined;
  @ViewChild('password', { static: false }) passwordElement:
    | ElementRef
    | undefined;

  loginForm: FormGroup;
  formSubmitted = false;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private messageService: MessageService,
    public authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  login() {
    // Show spinner before making the HTTP request
    this.showSpinner = true;

    // Perform login action
    this.authService
      .login(this.loginForm.value['userName'], this.loginForm.value['password'])
      .pipe(
        finalize(() => {
          // Hide spinner after login action is completed (whether success or error)
          this.showSpinner = false;
        })
      )
      .subscribe(
        () => {
          console.log('Login successfully');
          this.loginForm.reset();
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Xəbərdarlıq',
            detail: error?.error?.error?.errors?.join('\n'),
            life: 2000,
          });
        }
      );
  }

  // Open Dialog
  openDialog(id?: number) {
    this.dialog.open(ResetPasswordComponent, {
      width: '800px',
      autoFocus: false,
      position: {
        top: '50px',
      },
    });
  }
}
