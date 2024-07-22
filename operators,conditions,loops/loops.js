let user_input = prompt('Enter a number');
if(!isNaN(user_input)){
    for (let i=0; i<10; i++){
        console.log(user_input, 'X', i, '=', user_input*i)
    }
}