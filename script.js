const firstName1 = document.getElementById('firstName')
const lastName2 = document.getElementById('lastName')
const course3 = document.getElementById('course')
const sectionNumber4 = document.getElementById('sectionNumber')
const role5 = document.getElementById('role')
const button = document.getElementById('touch')

button.addEventListener('click', function(){
    const person = {
        firstName: firstName1.value, 
        lastName: lastName2.value,
        course: course3.value,
        sectionNumber: sectionNumber4.value,
        role: role5.value
    }
    console.log('Person object: ')
    console.log(person)
    console.log('JSON format: ')
    console.log(JSON.stringify(person))
})
