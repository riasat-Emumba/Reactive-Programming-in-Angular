import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { ErrorSnackbarComponent } from '../components/error-snackbar/error-snackbar.component';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }
  
  showError(message: string): void {
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      data: { message },
      duration: 5000, 
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  
}
