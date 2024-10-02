import { Component, OnInit } from '@angular/core';
import { PATHS, PROMISE_ROUTES } from 'src/app/core/constants/routes.constants';
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
      { name: PROMISE_ROUTES.PROMISE, link: PATHS.SLASH + PATHS.DASHBOARDS.PROMISE + PATHS.SLASH + PROMISE_ROUTES.PROMISE },
      { name: PROMISE_ROUTES.ASYNC_AWAIT, link: PATHS.SLASH + PATHS.DASHBOARDS.PROMISE + PATHS.SLASH + PROMISE_ROUTES.ASYNC_AWAIT },

      // Add more operators as needed
    ];
  }

}
