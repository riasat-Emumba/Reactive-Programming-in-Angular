import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-snackbar',
  templateUrl: './error-snackbar.component.html',
  styleUrls: ['./error-snackbar.component.scss']
})
export class ErrorSnackbarComponent {
  // Inject the data that was passed to the snackbar component. @Inject is used to inject the data that was passed 
  // to the snackbar component, and store it in the data property. MAT_SNACK_BAR_DATA is a token that is used to
  // inject the data that was passed to the snackbar component.
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any){}

}
