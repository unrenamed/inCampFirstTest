const studentUrl = 'http://localhost:3000/students';

window.onload = init;

function init(){
    fetch(studentUrl)
        .then(res => res.json())
        .then(renderStudents);

    let studentsForm = document.getElementById('student-form');
    studentsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createStudent()
            .then(loadStudents)
            .then(renderStudents);
    })
}

function loadStudents(){
    return fetch(studentUrl)
        .then(res => res.json());
}

function createStudent(){
    let student = {};
    student.name = document.getElementById('student-form').name.value;
    student.surname = document.getElementById('student-form').surname.value;
    student.graduate = document.getElementById('student-form').graduate.value;

    return fetch(studentUrl, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(student)
    });
}

/*renderStudents([
    {name: "Nazar", surname: "Poshtarenko", graduate: 4},
    {name: "Sasha", surname: "Kotov", graduate: 5},
    {name: "Oleg", surname: "Nosurname", graduate: 2}
    ]);*/

function renderStudents(students){
    let template = document.getElementById('student-template');
    let studentElement = template.content.querySelector('.student');
    let studentTable = document.getElementById('students');
    studentTable.innerHTML = "";

    for(let student of students){
        let studentClone = studentElement.cloneNode(true);
        updateStudentElement(studentClone, student);
        studentTable.appendChild(studentClone);
    }
}

function updateStudentElement(element, student){
    element.querySelector('.name').innerText = student.name;
    element.querySelector('.surname').innerText = student.surname;
    element.querySelector('.graduate').innerText = student.graduate;
}