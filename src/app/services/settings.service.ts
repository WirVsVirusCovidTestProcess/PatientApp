import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as AppState } from '../store';
import { Observable } from 'rxjs';
import * as SettingsSelectors from '../store/settings/settings.selector';
import * as SettingsActions from '../store/settings/settings.actions';
import * as Hydrated from '../store/hydrated';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private hydrated: Observable<boolean>;
  constructor(
    private store: Store<AppState>
  ) {
    this.setUpEventListeners();
  }

  private setUpEventListeners(): void {
    if (this.hydrated) {
      return;
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => this.handleSystemColorSchemePreferenceChange(e));

    this.hydrated = this.store.select(Hydrated.selectHydrated).pipe(filter(val => !!val));
    this.hydrated.subscribe(() => {
      this.getDarkMode().pipe(first()).subscribe((val) => {
        if (val === undefined) {
          this.setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        } else {
          this.setDarkMode(val);
        }
      });
    });
  }

  private handleSystemColorSchemePreferenceChange(mediaList): void {
    this.setDarkMode(mediaList.matches);
  }

  public getDarkMode(): Observable<boolean | undefined> {
    return this.store.select(SettingsSelectors.selectDarkMode);
  }

  public setDarkMode(value: boolean): void {
    document.body.classList.toggle('dark', value);
    this.store.dispatch(SettingsActions.setDarkMode({ value }));
  }
}
