Name_of_student_array = [];

function submit()
{

var name_1= document.getElementById("1").value;
var name_2= document.getElementById("2").value;
var name_3= document.getElementById("3").value;
var name_4= document.getElementById("4").value;

Name_of_student_array.push(name_1):
Name_of_student_array.push(name_2):
Name_of_student_array.push(name_3):
Name_of_student_array.push(name_4):
 
console.log(Name_of_student_array);

document.getElementById("display_name").innerHTML = Name_of_student_array;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";


}

function sorting()
{

    Name_of_student_array.sort():
    console.log(Name_of_student_array);
    document.getElementById("display_name").innerHTML = Name_of_student_array;
}