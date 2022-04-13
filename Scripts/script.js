//Задание 1

/*let numOrStr = prompt('input number or string');
console.log(numOrStr);

if(numOrStr === null || numOrStr.trim() === '' || isNaN( +numOrStr )) {
    console.log('ERROR!')
} else {
    console.log('OK!')
}*/


//Задание 2

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case (numOrStr === null):
        console.log('вы отменили');
        break;
    case (numOrStr.trim() === ''):
    case '':
        console.log('Empty String');
        break;
    case (isNaN( +numOrStr )):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}




