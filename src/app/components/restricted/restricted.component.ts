import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.scss']
})
export class RestrictedComponent implements OnInit {

  loggedUser?: User;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.loggedUser = this.auth.user;
  }

}