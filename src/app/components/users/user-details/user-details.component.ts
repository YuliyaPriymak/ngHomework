import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private router: Router,
              private  activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(params => {
      console.log(params, 'user params');
      console.log(this.router.getCurrentNavigation().extras.state, 'user state');
      this.user = this.router.getCurrentNavigation().extras.state.user;
    });
  }

  ngOnInit(): void {
  }

}
