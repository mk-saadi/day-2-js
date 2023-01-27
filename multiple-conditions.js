// one = means setting the value, two == means comparing the value, (&&) means every must be met, || means not every condition is a must
// var isGraduated=true;
// var salary=75000;
// var cars=0;

// if(isGraduated==true){
//     console.log('lets start a business');
// }
// else{
//     console.log('no money, no life');
// }

// >= grater than or equal to

// if(isGraduated==true && salary>50000){
//     console.log('lets start a business');
// }
// else{
//     console.log('no money, no life');
// }


// if(isGraduated==true && salary>50000 && cars>=1){
//     console.log('lets start a business');
// }
// else{
//     console.log('no money, no life');
// }

// 2nd
var isGraduated=true;
var salary=75000;
var cars=0;

if(isGraduated===true||salary>50000||cars>=1){
    console.log("shine bright")
}
else{
    console.log('everything is dim')
}

if(isGraduated===true && (salary>50000||cars>=1)){
    console.log('nice')
}
else{
    console.log('eat fried rice')
}