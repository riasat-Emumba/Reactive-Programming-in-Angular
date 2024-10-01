import { Component, OnInit } from '@angular/core';
import { IOperator } from 'src/app/shared/model/ioperator';

@Component({
  selector: 'app-promise-dashboard',
  templateUrl: './promise-dashboard.component.html',
  styleUrls: ['./promise-dashboard.component.scss']
})
export class PromiseDashboardComponent implements OnInit {

  operators: IOperator[] = [];
  
  ngOnInit(): void {
    this.initializeOperators();
  }

  private initializeOperators(): void {
    this.operators = [
      { name: 'Promise', link: '/promise-dashboard/promise' },
      { name: 'Asyncawait', link: '/promise-dashboard/asyncawait' },
 
      // Add more operators as needed
    ];
  }

}
