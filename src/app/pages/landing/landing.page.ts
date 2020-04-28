import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { UserService } from '../../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';

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
    private translateService: TranslateService,
    private alertController: AlertController
  ) {
  }

  ngOnInit() {
    this.hasAnsweredQuestionnaire = this.questionnaireService.getComplete();
    this.hasAccount = this.userService.hasUser();
  }

  async startOver() {
    await combineLatest([
      this.translateService.get('landingpage.start_over_confirmation.title'),
      this.translateService.get('landingpage.start_over_confirmation.text'),
      this.translateService.get('landingpage.start_over_confirmation.cancel'),
      this.translateService.get('landingpage.start_over_confirmation.confirm')
    ]).subscribe(async ([title, text, cancel, confirm]) => {
      const alert = await this.alertController.create({
        header: title,
        message: text,
        buttons: [{
          text: cancel,
          role: 'cancel',
          cssClass: 'alert-medium',
          handler: () => {
          }
        }, {
          text: confirm,
          cssClass: 'alert-danger',
          handler: () => {
            this.questionnaireService.clearData();
            this.userService.clearData();
          }
        }]
      });

      await alert.present();
    });
  }
}
