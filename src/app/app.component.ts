import { Component, ViewChild } from '@angular/core';
import { UsersListComponent } from './components/users-list/users-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Angular Lecture 1';

  sort: string = 'asc';

  filterText: string = '';

  constructor() { }

  @ViewChild(UsersListComponent) child !: UsersListComponent;

  selectAllUsers() {
    this.child.selectAllUsers();
  }

  deleteUsers() {
    this.child.deleteUsers();
  }

  filterTextChanged(value: any) {
    console.log(value)
    this.filterText = value;
  }

  selectSort() {
    this.sort === 'asc' ? this.sort = 'desc' : this.sort = 'asc';
    console.log(this.sort)
  }
}
