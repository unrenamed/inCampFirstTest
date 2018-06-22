const studentUrl = 'http://localhost:3000/students';

window.onload = init;

function init(){
    fetch(studentUrl)
        .then(res => res.json())
        .then(renderStudents)
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