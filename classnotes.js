// make a function, createStudent
// that takes in some number of string parameters where the first is a name
// the second is an id, the third is a year/level, and then the rest are classes 
// return a student object 
function createStudent(studentName, studentId, studentYear, tuitionPaid, ...studentClasses) {
    // we don't add in the the classes because we don't know how many
    // because then we can use arguments[]
    // but there is another way
    console.log(studentName);
    console.log(studentId);
    console.log(studentYear);
    console.log(studentClasses);
    console.log(tuitionPaid)
}

console.log('--------------------------------------');
// createStudent('Alesha', 23495820, 3, true, 'Programming', 'English', 'Art', 'Communications', 'Physics');


// Default Parameters
// can add a default parameter by setting it in the definition
// if i pass in a color, then nothing is different
// but if i don't then the color will be purple
function setColor(bicycle, color='purple', addTassles) {
    console.log('before color change')
    console.log(bicycle);
    console.log(color);
    bicycle.color  = color;
    console.log('after color change')
    console.log(bicycle);
    // if (addTassles) {
    //     bicycle.tassle = true;
    // }
    // console.log(bicycle)
}

const newBike = {
    color: 'red'
}
// console.log(newBike);
setColor(newBike, 'silver');
// setColor(newBike);
// // setColor(newBike, 'silver', true);
// setColor(newBike, true);