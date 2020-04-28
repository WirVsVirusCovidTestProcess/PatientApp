import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Gender, User } from '../../../types/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: User;
  availableGenders = Object.values(Gender);
  submitted = false;

  @ViewChild('userForm', { static: false }) userForm: NgForm;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    const fakeDate = new Date();
    fakeDate.setFullYear(1973, 3, 30);
    this.user = new User({
      id: Math.floor(Date.now()).toString(16),
      address: {
        street: 'Boxhagener Straße',
        houseNumber: '83',
        zip: '21129',
        city: 'Hamburg',
        country: 'Deutschland'
      },
      email: 'daniel.schultz@web.de',
      firstName: 'Daniel',
      gender: Gender.MALE,
      lastName: 'Schultz',
      nationality: 'deutsch',
      occupation: 'Gärtner',
      phoneNumber: '+49 040 42 92 66',
      dateOfBirth: fakeDate
    });
  }


  signUp(): void {
    this.submitted = true;
    this.userService.setUser(this.user);
    setTimeout(() => {
      this.router.navigateByUrl('/account').then(() => {
        this.submitted = false;
      });
    }, 1000);
  }
}
