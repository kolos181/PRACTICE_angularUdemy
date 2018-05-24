import {Component} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>'
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  // styles: [`
  // h2 {
  // color: blue;
  // }
  // `]
})

export class UserComponent {

  user: User;

  constructor() {
      this.user = {
        firstName: 'John',
        lastName: 'DOSSS',
        age: 30,
        address: {
          street: 'Chornovola',
          city: 'Ivano-Frankivsk',
          state: 'Ivano-Frankivsk area'
        }
      }
  }
}


