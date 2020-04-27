import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Observable } from 'rxjs';
import { RiskGroup } from '../../types/riskgroups';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor(private router: Router, private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
  }

  redirectToSignup(): void {
    this.router.navigateByUrl('/account/signup');
  }

  getRiskGroup(): Observable<RiskGroup | undefined> {
    return this.questionnaireService.getRiskGroup();
  }
}
