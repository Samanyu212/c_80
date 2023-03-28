name_array=[];
function submit(){
    var display_student_array=[];
    for(i=1;i<=4;i++){
        var name_of_student=document.getElementById("name"+i).value;
        console.log(name_of_student);
        name_array.push(name_of_student);


    }
    console.log(name_array);
    var lenght_of_array=name_array.lenght;
    console.log(lenght_of_array);
    for(k=0;k<lenght_of_array;k++){
display_student_array.push("<h4>NAME:"+name_array[k]+"</h4>");
console.log(display_student_array);

    }
    console.log(display_student_array);
    document.getElementById("name_with_comma").innerHTML=display_student_array;

}
