import { Component, OnInit, Input, TemplateRef } from '@angular/core';

//import student model and its service
import { Student } from '../../../_model/student';
import { StudentService } from '../student.service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  @Input() student: Student;
  modalRef: BsModalRef;
  editStudentForm: FormGroup;
  constructor(private studentService: StudentService, private modalService: BsModalService) { }

  ngOnInit() {
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
  onSubmit() {
    if (this.editStudentForm.controls.studentId.valid && this.editStudentForm.controls.studentName.valid) {
      this.student.id = this.editStudentForm.controls.studentId.value;
      this.student.name = this.editStudentForm.controls.studentName.value;
      this.modalService.hide(1)
    }
  }
}
