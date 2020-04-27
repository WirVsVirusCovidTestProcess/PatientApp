import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-high-risk-group',
  templateUrl: './high.component.html',
  styleUrls: ['./high.component.scss'],
})
export class HighComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirectToSignup(): void {
    this.router.navigateByUrl('/account/signup');
  }
}
