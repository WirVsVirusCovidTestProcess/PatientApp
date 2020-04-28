import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(
    private translateService: TranslateService,
    private alertController: AlertController
  ) {
  }

  async showAlert({
                    title,
                    text,
                    cancelText,
                    confirmText,
                    cancelHandler,
                    confirmHandler
                  }: {
    title: string,
    text: string,
    cancelText: string,
    confirmText: string,
    cancelHandler: () => void,
    confirmHandler: () => void
  }) {
    await combineLatest([
      this.translateService.get(title),
      this.translateService.get(text),
      this.translateService.get(cancelText),
      this.translateService.get(confirmText)
    ]).subscribe(async ([titleDisplay, textDisplay, cancelDisplay, confirmDisplay]) => {
      const alert = await this.alertController.create({
        header: titleDisplay,
        message: textDisplay,
        buttons: [{
          text: cancelDisplay,
          role: 'cancel',
          cssClass: 'alert-medium',
          handler: cancelHandler
        }, {
          text: confirmDisplay,
          cssClass: 'alert-danger',
          handler: confirmHandler
        }]
      });

      await alert.present();
    });
  }
}
