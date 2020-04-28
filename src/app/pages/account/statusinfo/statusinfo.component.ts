import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Result {
  color: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-account-statusinfo',
  templateUrl: './statusinfo.component.html',
  styleUrls: ['./statusinfo.component.scss']
})
export class StatusinfoComponent implements OnInit {
  result: Observable<Result>;

  constructor() {
  }

  ngOnInit() {
    this.result = new Observable<Result>((subscriber) => {
      setTimeout(() => {
        subscriber.next({
          color: 'medium',
          value: 'processing',
          icon: 'flask-outline'
        });
        setTimeout(() => {
          subscriber.next({
            color: 'danger',
            value: 'positive',
            icon: 'alert-circle-outline'
          });
        }, 5000);
      }, 1000);
    });
  }

}
