import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  darkMode: Observable<boolean>;

  constructor(
    private settingsService: SettingsService
  ) {
  }

  ngOnInit() {
    this.darkMode = this.settingsService.getDarkMode();
  }

  handleDarkModeChange(event): void {
    this.settingsService.setDarkMode(event.detail.checked);
  }
}
