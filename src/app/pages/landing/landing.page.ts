import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { UserService } from '../../services/user.service';
import { ConfirmationService } from '../../services/confirmation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit {
  hasAnsweredQuestionnaire: Observable<boolean>;
  hasAccount: Observable<boolean>;

  constructor(
    private questionnaireService: QuestionnaireService,
    private userService: UserService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.hasAnsweredQuestionnaire = this.questionnaireService.getComplete();
    this.hasAccount = this.userService.hasUser();
  }

  async startOver() {
    await this.confirmationService.showAlert({
      title: 'landingpage.start_over_confirmation.title',
      text: 'landingpage.start_over_confirmation.text',
      cancelText: 'landingpage.start_over_confirmation.cancel',
      confirmText: 'landingpage.start_over_confirmation.confirm',
      cancelHandler: () => {},
      confirmHandler: () => {
        this.questionnaireService.clearData();
        this.userService.clearData();
      }
    });
  }
}
