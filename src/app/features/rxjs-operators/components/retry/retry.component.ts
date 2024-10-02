import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { delay, retry, retryWhen, scan } from 'rxjs';
import { IUsersDetail } from '../../models/iusers-detail';
import { USER_STATUS_MESSAGES } from 'src/app/core/constants/user.constants';
import { RETRY_LIMIT } from 'src/app/core/constants/retry.constants';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  personObjRetry!: IUsersDetail;
  personRetryWhen!: IUsersDetail;
  statusUsingRetry: string = USER_STATUS_MESSAGES.NO_DATA;
  statusUsingRetryWhen: string = USER_STATUS_MESSAGES.NO_DATA;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  // RetryWhen
  getUserDetailsUsingRetryWhen() {
    this.statusUsingRetryWhen = USER_STATUS_MESSAGES.FETCHING
    this.apiService.getUsersDetail().pipe(
      retryWhen(error => error.pipe(
        delay(7000),
        scan(retryCount => {
          if (retryCount >= RETRY_LIMIT) {
            throw error;
          } else {
            retryCount = retryCount + 1;
            console.log(retryCount);
            this.statusUsingRetryWhen = USER_STATUS_MESSAGES.RETRYING + retryCount;
            return retryCount;
          }
        }, 0)
      ))
    ).subscribe({
      next: (res => {
        console.log(res);
        this.personRetryWhen = res;
        this.statusUsingRetryWhen = USER_STATUS_MESSAGES.DATA_FETCHED;
      }), error: (err => {
        console.log(err);
        this.statusUsingRetryWhen = USER_STATUS_MESSAGES.PROBLEM_FETCHING;
      })
    })


  }
  // Retry
  getUserDetailsUsingRetry() {
    this.statusUsingRetry = USER_STATUS_MESSAGES.FETCHING
    this.apiService.getUsersDetail().pipe(
      retry(2)
    ).subscribe({
      next: (res => {
        console.log(res);
        this.personObjRetry = res;
        this.statusUsingRetry = USER_STATUS_MESSAGES.DATA_FETCHED
      }), error: (err => {
        console.log(err);
      })
    })


  }

}
