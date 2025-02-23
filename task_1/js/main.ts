// Task 1.1: Create the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  console.log(printTeacher('John', 'Doe'));
  
  
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class Student implements StudentClass {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  
  const student1 = new Student('Alice', 'Johnson');
  console.log(student1.workOnHomework());
  console.log(student1.displayName());