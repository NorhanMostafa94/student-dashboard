import { Component, OnInit } from '@angular/core';

//import Student model and its service
import { Student } from '../../../_model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    if (!this.data) {
      this.data = this.studentService.getAll();
      console.log(this.data)
    }
  }

}
