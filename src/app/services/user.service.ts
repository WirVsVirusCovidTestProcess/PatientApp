import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as AppState } from '../store';
import { Observable } from 'rxjs';
import * as UserSelectors from '../store/user/user.selector';
import * as UserActions from '../store/user/user.actions';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private store: Store<AppState>,
  ) { }

  public hasUser(): Observable<boolean> {
    return this.store.select(UserSelectors.selectHasUser);
  }

  public getUser(): Observable<User | undefined> {
    return this.store.select(UserSelectors.selectUser);
  }

  public setUser(user: User): void {
    this.store.dispatch(UserActions.setUser({ user }));
  }
}
