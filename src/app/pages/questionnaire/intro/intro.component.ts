import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {}

  nextSlide(): void {
    this.slides.slideNext();
  }

  startQuestionnaire(): void {
    this.router.navigateByUrl('/questionnaire/questions');
  }
}
