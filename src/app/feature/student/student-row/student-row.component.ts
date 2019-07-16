import { Component, OnInit, Input } from '@angular/core';

//import Student model and its service
import { Student } from '../../../_model/student';
import { StudentService } from '../student.service';


@Component({
  selector: 'student-row',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent implements OnInit {
  @Input() student: Student
  constructor() { }

  ngOnInit() {
  }

}
