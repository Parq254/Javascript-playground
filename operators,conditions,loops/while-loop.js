let do_more = true
while(do_more){
    let user_input = prompt('Enter a word');
    if(isNaN(user_input)){
        console.log('Length of the word you entered is' + user_input.length)
    }
    else{
        console.log('Please enter a word')
    }
    let should_continue = prompt('Do you want to continue. Press n to stop')

    if(should_continue === 'n')
    {
        do_more = false
    }
}