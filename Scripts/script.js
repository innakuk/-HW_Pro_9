//Задание 1

//let numOrStr = prompt('input number or string');
//console.log(numOrStr);

/*if(numOrStr === null || numOrStr.trim() === '' || isNaN( +numOrStr )) {
    console.log('ERROR!')
} else {
    console.log('OK!')
}*/


//Задание 2

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (numOrStr) {
    case null:
        console.log('вы отменили');
        break;
    case '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log(' number is Ba_NaN');
        break;
    case numOrStr:
        console.log('OK!');
        break;
}
