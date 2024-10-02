import { Component, Input } from '@angular/core';
import { ISuperUser } from '../../models/isuper-user';

@Component({
  selector: 'app-super-user-list',
  templateUrl: './super-user-list.component.html',
  styleUrls: ['./super-user-list.component.scss']
})
export class SuperUserListComponent {
  @Input() superUser!: ISuperUser;
}
