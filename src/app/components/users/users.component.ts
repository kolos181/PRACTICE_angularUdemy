import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }

  users: User[];

  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  data: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // this.dataService.getData().subscribe(data => {
    //   console.log(data);
    // });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

  }

  //'value' is the object that comes from the form

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
    }
  }
}
