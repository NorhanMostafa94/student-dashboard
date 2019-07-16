import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';

//import Student model and its service
import { Student } from '../../_model/student';
import { StudentService } from './student.service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  data: Student[];
  student: Student;
  editStudentForm: FormGroup;
  modalRef: BsModalRef;
  constructor(private studentService: StudentService, private modalService: BsModalService) { }

  ngOnInit() {
    if (!this.data) {
      this.data = this.studentService.getAll();
      console.log(this.data)
    }
    this.editStudentForm = new FormGroup({
      studentId: new FormControl('', Validators.required),
      studentName: new FormControl('', Validators.required)
    })
  }

  //open Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  //submit edit form
  onSubmit(id: number) {
    if (this.editStudentForm.controls.studentId.valid && this.editStudentForm.controls.studentName.valid) {
      this.student = this.studentService.getById(id);
      this.student.id = this.editStudentForm.controls.studentId.value;
      this.student.name = this.editStudentForm.controls.studentName.value;
      this.modalService.hide(1)
    }
  }

}
