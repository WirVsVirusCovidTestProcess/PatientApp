import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../types/user';
import { UserService } from '../../../services/user.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-account-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {
  user: Observable<User>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser().pipe(delay(1500));
  }

}
