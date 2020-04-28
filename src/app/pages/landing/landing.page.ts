import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  hasAnsweredQuestionnaire: Observable<boolean>;
  hasAccount: Observable<boolean>;

  constructor(private questionnaireService: QuestionnaireService, private userService: UserService) { }

  ngOnInit() {
    this.hasAnsweredQuestionnaire = this.questionnaireService.getComplete();
    this.hasAccount = this.userService.hasUser();
  }
}
