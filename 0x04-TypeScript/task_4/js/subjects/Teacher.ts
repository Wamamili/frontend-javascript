namespace Subjects {
    setTeacher(teacher: Teacher) {
        firstName: string;
        lastName: string;
    }

    export class Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
