// Teacher.ts
namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }

    export class Subjects {
        teacher: Teacher;

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
