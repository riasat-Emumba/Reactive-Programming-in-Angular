import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MESSAGES } from 'src/app/core/constants/messages.constants';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})

export class CatchErrorComponent implements OnInit {

  catchError: string = MESSAGES.NO_ERRORS;
  throwError: string = MESSAGES.FAKE_API;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getError();
  }

  getError() {
    this.apiService.getError().pipe(
      catchError((error) => {
        this.catchError = error.message;
        return error;
      }
      )).subscribe({
        next: (data) => {
          console.log(data);
        }
      });

  }

}
