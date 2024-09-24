import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person: any;
  status = 'No Data'
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {

  }


  // RetryWhen
  getUserDetails() {
    this.status = "Fetching...";
    this.apiService.fetchUserDetails().pipe(
      retryWhen(error => error.pipe(
        delay(7000),
        scan(retryCount =>{
          if(retryCount >= 3 ){
            throw error;
          } else {
             retryCount = retryCount + 1;
             console.log(retryCount);
             this.status = "Retrying Attemp #" + retryCount;
              return retryCount;
          }
        },0 )
      ))
    ).subscribe({
      next: (res => {
        console.log(res);
        this.person = res;
        this.status = 'Data Fetched'
      }), error: (err => {
        console.log(err);
        this.status = "Problem Fetching Data"
      })
    })


  }
  // Retry
  // getUserDetails() {
  //   this.status = "Fetching...";
  //   this.apiService.fetchUserDetails().pipe(
  //     retry(2)
  //   ).subscribe({
  //     next: (res => {
  //       console.log(res);
  //       this.person = res;
  //       this.status = 'Data Fetched'
  //     }), error: (err => {
  //       console.log(err);
  //     })
  //   })


  // }

}
