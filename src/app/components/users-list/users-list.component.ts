import { Component, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/types/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent {

  users: User[] = [];

  @Output() selectedUsers: number[] = [];
  @Input() filter: string = "";
  @Input() sortFilter: string = "";

  constructor(private usersData: UsersService) { }

  ngOnInit() {
    this.usersData.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  onUserSelect(id: number) {
    if (this.selectedUsers.includes(id))
      this.selectedUsers = this.selectedUsers.filter(userId => userId !== id);
    else
      this.selectedUsers.push(id);
  }

  selectAllUsers() {
    this.selectedUsers = this.users.map(user => user.id)
  }

  deleteUsers() {
    this.users = this.users.filter(user => !this.selectedUsers.includes(user.id))
  }
}
