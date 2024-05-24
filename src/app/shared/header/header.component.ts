import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { SharedService } from '../../core/services/shared.service';
import { log } from 'console';
import { ResetPasswordComponent } from '../../dialogs/reset-password/reset-password.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  userId: any;
  userName: any;
  constructor(public authService: AuthService, public dialog: MatDialog) {
    // this.userName = JSON.parse(localStorage.getItem('user') as any)?.[
    //   'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
    // ];
    // this.userId = +JSON.parse(localStorage.getItem('user') as any)?.[
    //   'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
    // ];
  }

  // Open Dialog
  openDialog(id?: number) {
    this.dialog
      .open(ResetPasswordComponent, {
        width: '800px',
        autoFocus: false,
        data: { userId: id },
        position: {
          top: '50px',
        },
      })
      .afterClosed()
      .subscribe(() => {});
  }
}
