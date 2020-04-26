import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {}

  nextQuestion(): void {
    this.slides.isEnd().then(value => {
      if (value) {
        this.completeQuestionnaire();
      } else {
        this.slides.slideNext();
      }
    });
  }

  completeQuestionnaire(): void {
    this.router.navigateByUrl('/results');
  }
}
