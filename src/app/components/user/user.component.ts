import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IUser} from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: IUser;

  constructor(private  router: Router) {
    this.user = history.state.user;
  }

  ngOnInit(): void {
  }

}
