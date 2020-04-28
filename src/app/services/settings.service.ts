import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as AppState } from '../store';
import { Observable } from 'rxjs';
import * as SettingsSelectors from '../store/settings/settings.selector';
import * as SettingsActions from '../store/settings/settings.actions';
import * as Hydrated from '../store/hydrated';
import { filter, first, map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { availableLanguages, Language } from '../types/languages';



@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private hydrated: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private translateService: TranslateService
  ) {
    this.setUpEventListeners();
  }

  public setUpEventListeners(): void {
    if (this.hydrated) {
      return;
    }
    this.translateService.setDefaultLang(availableLanguages[0]);

    this.hydrated = this.store.select(Hydrated.selectHydrated).pipe(filter(val => !!val), first());
    this.hydrated.subscribe(() => {
      this.initializeDarkMode();
      this.initializeLanguage();
    });
  }

  private initializeDarkMode(): void {
    this.getDarkMode().pipe(first()).subscribe((val) => {
      this.setDarkMode(val !== undefined ? val : window.matchMedia('(prefers-color-scheme: dark)').matches);
    });
  }

  private initializeLanguage(): void {
    this.getLanguage().pipe(first()).subscribe((val) => {
      this.setLanguage(val !== undefined ? val : availableLanguages[0]);
    });
  }

  public getDarkMode(): Observable<boolean | undefined> {
    return this.store.select(SettingsSelectors.selectDarkMode);
  }

  public setDarkMode(value: boolean): void {
    document.body.classList.toggle('dark', value);
    this.store.dispatch(SettingsActions.setDarkMode({ value }));
  }

  public getLanguage(): Observable<Language | undefined> {
    return this.store.select(SettingsSelectors.selectLanguage);
  }

  public isLanguageSelected(lang: Language): Observable<boolean> {
    return this.getLanguage().pipe(map((currentLanguage) => currentLanguage === lang));
  }

  public setLanguage(lang: Language): void {
    this.translateService.use(lang);
    this.store.dispatch(SettingsActions.setLanguage({ language: lang }));
  }
}
