import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';

@Component({
  selector: 'app-questionnaire-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(private router: Router, private questionnaireService: QuestionnaireService) {
  }

  ngOnInit() {
  }

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
    this.questionnaireService.setComplete();
    this.router.navigateByUrl('/results');
  }

  setRiskGroup(event): void {
    this.questionnaireService.setRiskGroup(event.detail.value);
  }
}
