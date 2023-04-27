import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    FilterUsersPipe,
    ActionBarComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
