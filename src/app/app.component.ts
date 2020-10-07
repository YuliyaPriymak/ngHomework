import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from './IUser';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngHomework';
  usersList: IUser[] = [];
  user: IUser;

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => {
      this.usersList = value;
      console.log(this.usersList);
    });
  }

  ngOnInit(): void {
  }
}
