import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Observable } from 'rxjs';
import { RiskGroup } from '../../types/riskgroups';
import { delay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  private riskGroup: Observable<RiskGroup>;

  constructor(private router: Router, private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    this.riskGroup = this.questionnaireService.getRiskGroup().pipe(delay(0));
  }
}
