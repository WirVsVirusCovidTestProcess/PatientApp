import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Output() startOver = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {}

  gotoResults(): void {
    this.router.navigateByUrl('/results');
  }

  restart(): void {
    this.startOver.emit();
  }
}
