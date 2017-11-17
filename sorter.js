var students = ["sofia", "devin", "najely", "kassandra",
"fatburger ricki", "alejandra", "lashawnte", "xochi", "jimmie",
"jonathan delgado", "andres", "eric", "jonathan interiano", 
"scott", "javier", "lissette", "rodolfo", "twin", "rafa", "brian", "john rodriguez", "dre", "brandon green"]

//console.log(student.length)
function sortStudents(studentsArray, size){
    var groups = [ ]
    var currentGroup = [ ]
    // Loop over all the students
    while (studentsArray.length > 0) {
        // pick a random student
        var randomNumber = math.floor(Math.random
        () * studentsArray.length)
        // pick a random student
        var randomStudents =
        studentsArray[randomNumber]
        //add random student to current group
        currentGroup.push(randomStudent)
        // delete the random student
        studentsArray.splice(randomNumber,1)
        if (currentGroup.length >= size) {
            groups.push(currentGroup)
            currentGroup = [ ]
        }
    }
    if (currentGroup.length > 0) {
        groups.push(currentGroup)
    }
    for (var i = 0; i , groups.length; i++){
        console.log('group#'+(i+1)+":"
        +groups[1])
    }
}