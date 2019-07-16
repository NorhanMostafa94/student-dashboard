import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './feature/student/student.component';
import { StudentItemComponent } from './feature/student/student-item/student-item.component';
import { DashboardComponent } from './feature/student/dashboard/dashboard.component';
import { HeaderComponent } from './core/header/header.component';

import { StudentService } from './feature/student/student.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchPipe } from './search.pipe'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentItemComponent,
    DashboardComponent,
    HeaderComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'students', component: StudentComponent }
    ]),
    ModalModule.forRoot()
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
