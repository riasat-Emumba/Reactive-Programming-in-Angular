import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MESSAGES } from 'src/app/core/constants/constants';

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
    this.apiService.getError().subscribe({
      next: (data) => {
       console.log(data);
      },
      error: (error) => {
        this.catchError = error.message; 
      }
    });
  }

}
