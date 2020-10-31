import {Component, OnInit} from '@angular/core';
import {IUser} from './models/user.model';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from './services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  userName: FormControl = new FormControl('',
    [Validators.required, Validators.maxLength(14), Validators.pattern(/[A-z]/)]);
  users: IUser[] = [];
  currentUser: IUser[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
      console.log(this.users);
    });
    this.form = new FormGroup({
      userName: this.userName
    });
  }

  details(name: string): void {
    this.currentUser = this.users.filter(user => user.name.toLowerCase() === name.toLowerCase());
    console.log(this.currentUser);
    this.router.navigate(['user'], {
      relativeTo: this.activatedRoute,
      state: {user: this.currentUser}
    });
  }

  action() {
    console.log(this.userName);
  }
}
