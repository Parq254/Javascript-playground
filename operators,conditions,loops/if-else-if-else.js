let user_input = prompt('Enter a value');

if (!user_input){
    console.log('You did not input anything')
}
else if (isNaN(user_input)){
    console.log('Your input is ', user_input)
    console.log('The length of your input is ', user_input.length)
}
else{
    console.log(user_input, 'X 1 =', user_input*1)
    console.log(user_input, 'X 2 =', user_input*2)
    console.log(user_input, 'X 3 =', user_input*3)
    console.log(user_input, 'X 4 =', user_input*4)
    console.log(user_input, 'X 5 =', user_input*5)
    console.log(user_input, 'X 6 =', user_input*6)
    console.log(user_input, 'X 7 =', user_input*7)
    console.log(user_input, 'X 8 =', user_input*8)
    console.log(user_input, 'X 9 =', user_input*9)



}