import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {

  @Output() selectAllUsers = new EventEmitter<string>();
  @Output() deleteUsers = new EventEmitter<string>();
  @Output() filterTextEvent = new EventEmitter<string>();
  @Output() sortSelectEvent = new EventEmitter<string>();
  filterText: string = '';

  ngOnInit() {
    this.filterTextEvent.emit('');
  }

  onFilterChange() {
    this.filterTextEvent.emit(this.filterText);
  }

  onSelectAllUsers() {
    this.selectAllUsers.emit();
  }

  onDeleteUsers() {
    this.deleteUsers.emit();
  }

  onSortSelect() {
    this.sortSelectEvent.emit();
  }

}
