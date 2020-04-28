import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  gotoResults(): void {
    this.router.navigateByUrl('/results');
  }
}
