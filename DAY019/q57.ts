//create a array with 6 elements
let gradesOfStudents: number[] = [80, 95, 78, 85, 63, 54]
/*declare a new varaible and apply reduce methode reduce sum 
of all the number present and devide it number of elements in array*/
let averageGrade: number = gradesOfStudents.reduce((addAll, studentGrade)=> addAll + studentGrade, 0)
/ gradesOfStudents.length;

console.log(averageGrade)//print calculated average