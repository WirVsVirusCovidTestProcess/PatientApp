import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  darkMode: Observable<boolean>;

  constructor(
    private settingsService: SettingsService,
    private alertController: AlertController,
    private storage: Storage,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.darkMode = this.settingsService.getDarkMode();
  }

  handleDarkModeChange(event): void {
    this.settingsService.setDarkMode(event.detail.checked);
  }

  async clearData() {
    const alert = await this.alertController.create({
      header: 'Delete Data?',
      message: 'Are you sure you want to <strong>delete all your data</strong>?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'alert-medium',
        handler: () => {}
      }, {
        text: 'Delete Data',
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
  }
}
