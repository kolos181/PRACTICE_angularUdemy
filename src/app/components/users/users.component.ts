import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
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

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.loaded = true;
  }

  //'value' is the object that comes from the form

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);
    }
  }
}
