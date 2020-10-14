import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {IUser} from './models/user.model';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  Users;
  currentUser: any;

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => {
      this.usersList = value;
    });
  }

  ngOnInit(): void {
  }

  checkInput(idUsers: NgModel, form: NgForm): void {
    this.currentUser = idUsers;
  }
}
