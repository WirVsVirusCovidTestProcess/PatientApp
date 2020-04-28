import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { availableLanguages, Language } from '../../types/languages';
import { ConfirmationService } from '../../services/confirmation.service';

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
    private storage: Storage,
    private router: Router,
    private confirmationService: ConfirmationService
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
    await this.confirmationService.showAlert({
      title: 'settings.delete_data_confirmation.title',
      text: 'settings.delete_data_confirmation.text',
      cancelText: 'settings.delete_data_confirmation.cancel',
      confirmText: 'settings.delete_data_confirmation.confirm',
      cancelHandler: () => {},
      confirmHandler: () => {
        this.storage.clear().then(() => {
          this.router.navigateByUrl('/').then(() => {
            window.location.reload();
          });
        });
      }
    });
  }
}
