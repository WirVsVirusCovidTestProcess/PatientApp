import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';

@Component({
  selector: 'app-results-loading-risk-group',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  constructor(private router: Router, private questionnaireService: QuestionnaireService) { }

  ngOnInit() {}

  restartQuestionnaire() {
    this.questionnaireService.clearData();
    this.router.navigateByUrl('/questionnaire');
  }
}
