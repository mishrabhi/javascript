// switch statemnt

var a = 10;

// switch(a){
//     case 10 :
//         console.log('value of a is 10')
//         break;
//     case 2 :
//         console.log('false')
//         break;
//     case 10 :
//         console.log('true')
//         break;
//     default :
//     console.log('Not Match')
// }



switch(a) {
    case 2 :
        console.log('false')
        break;
    default :
        console.log('default')
        break;
    case 1:
        console.log('true')
}


var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
    console.log('This animal will go on Noah\'s cow.');

  case 'Giraffe':
    console.log('This animal will go on Noah\'s gir.');

  case 'Dog':
    console.log('This animal will go on Noah\'s dog.');

  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}