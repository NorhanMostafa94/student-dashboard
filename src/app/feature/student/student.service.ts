import { Student } from '../../_model/student';
import { Injectable } from '@angular/core';
@Injectable()
export class StudentService {
    data: Student[];
    constructor() {
        this.data = [
            { id: 1, name: 'Norhan', isActive: false, FinalResult: 100 },
            { id: 2, name: 'Yomna', isActive: false, FinalResult: 90 },
            { id: 3, name: 'Alaa', isActive: false, FinalResult: 85 },
            { id: 4, name: 'Mostafa', isActive: false, FinalResult: 70 },
            { id: 5, name: 'Hamada', isActive: false, FinalResult: 60 }
        ]
    }

    getAll(): Student[] {
        return this.data;
    }
    getById(id: number): Student {
        return this.data.find(std => std.id === id);
    }
    update(student: Student) {
        const i = this.data.findIndex(std => std.id === student.id);
        this.data[i] = student;
    }
}