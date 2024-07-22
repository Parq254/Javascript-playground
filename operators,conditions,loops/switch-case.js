let user_input = prompt('Enter a number between 1 to 7');

if(isNaN(user_input) || user_input < 1 || user_input > 7){
    console.log('Invalid input')
}
else{
    user_input = parseInt(user_input)
    switch(user_input){
        case 1:console.log('Sunday'); break;
        case 2:console.log('Monday'); break;
        case 3:console.log('Tuesday'); break;
        case 4:console.log('Wednesday'); break;
        case 5:console.log('Thursday'); break;
        case 6:console.log('Friday'); break;
        case 7:console.log('Saturday'); break;
        default:console.log('Invalid entry')
    }
}