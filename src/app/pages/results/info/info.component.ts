import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';

@Component({
  selector: 'app-results-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  infoParts = [{
    imageUrl: 'assets/img/illustrations/undraw_wash_hands_nwl2.svg',
    title: 'results.info.1.title',
    texts: ['results.info.1.text1', 'results.info.1.text2']
  }, {
    imageUrl: 'assets/img/illustrations/undraw_at_home_octe.svg',
    title: 'results.info.2.title',
    texts: ['results.info.2.text1']
  }, {
    imageUrl: 'assets/img/illustrations/undraw_social_distancing_2g0u.svg',
    title: 'results.info.3.title',
    texts: ['results.info.3.text1', 'results.info.3.text2']
  }, {
    imageUrl: 'assets/img/illustrations/undraw_calling_kpbp.svg',
    title: 'results.info.4.title',
    texts: ['results.info.4.text1', 'results.info.4.text2']
  }, {
    imageUrl: 'assets/img/illustrations/undraw_customer_survey_f9ur.svg',
    title: 'results.info.restart.title',
    texts: ['results.info.restart.text1'],
    button: {
      text: 'results.info.restart.button',
      handler: this.restartQuestionnaire.bind(this)
    }
  }];

  @Input() loading: boolean;

  constructor(private router: Router, private questionnaireService: QuestionnaireService) { }

  ngOnInit() {}

  restartQuestionnaire() {
    this.questionnaireService.clearData();
    this.router.navigateByUrl('/questionnaire');
  }
}
