import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Observable, combineLatest } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { availableLanguages, Language } from '../../types/languages';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  darkMode: Observable<boolean>;
  language: Observable<Language>;
  availableLangs = availableLanguages;

  constructor(
    private settingsService: SettingsService,
    private alertController: AlertController,
    private storage: Storage,
    private router: Router,
    private translateService: TranslateService
  ) {
  }

  ngOnInit() {
    this.darkMode = this.settingsService.getDarkMode();
    this.language = this.settingsService.getLanguage();
  }

  handleDarkModeChange(event): void {
    this.settingsService.setDarkMode(event.detail.checked);
  }

  handleLanguageChange(event): void {
    this.settingsService.setLanguage(event.detail.value);
  }

  async clearData() {
    await combineLatest([
      this.translateService.get('settings.delete_data_confirmation.title'),
      this.translateService.get('settings.delete_data_confirmation.text'),
      this.translateService.get('settings.delete_data_confirmation.cancel'),
      this.translateService.get('settings.delete_data_confirmation.confirm')
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
            this.storage.clear().then(() => {
              this.router.navigateByUrl('/').then(() => {
                window.location.reload();
              });
            });
          }
        }]
      });

      await alert.present();
    });
  }
}
