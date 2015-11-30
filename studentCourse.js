function Student(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
  this.courses = [];
}

Student.prototype.enroll = function(course) {
  if (this.courses.indexOf(course) === -1) {
    this.courses.push(course);
    course.students.push(this);
  } else {
    console.log("Already enrolled!");
  }
}

Student.prototype.courseLoad = function() {
  var load = new Object();
  this.courses.forEach(function(course) {
    var dep = course.department;
    if (typeof load[dep] === 'undefined') {
      load[dep] = course.credit;
    } else {
      load[dep] += course.credit;
    }
  })
  return load;
}

function Course(name, department, credit) {
  this.name = name;
  this.department = department;
  this.department = department;
  this.credit = credit;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
}

// tests
var student1 = new Student("Colin", "Chen");
var student2 = new Student("Jingming", "Chen");
var course1 = new Course("Ruby 101", "CS", 4);
var course2 = new Course("Javascript 101", "CS", 4);
var course3 = new Course("Calculus 1", "Math", 3);
var course4 = new Course("US Gov 101", "Politics", 4);
var course5 = new Course("Discrete Math", "Math", 4);

student1.enroll(course1);
student1.enroll(course2);
student1.enroll(course3);
student1.enroll(course4);
student1.enroll(course5);
