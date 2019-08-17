let temp = 155

//Logical And Operator 
 //True if both side are ture, False otherwise
 //True at leat one side true, False otherwise
if (temp >=60 && temp <=90) {
    console.log('It is pretty nice outside!');
}else if (temp <= 0 || temp >= 120) {//  false        false      = false  no result
    console.log('Do not go outside!');
}else{
    console.log('Do what ever you want!');
    
}

//===========Challege Area =====================\
//Resturant Reservation logic

let isGuesOneVegan= false
let isGuesTwoVegan =false

//Are both Vegan? print -> Only offer up vegan dishes.
//At least one vegan? print - > Make sure to offer up some vegan options.
//Else, print -> Offer anything on the menu

if (isGuesOneVegan && isGuesTwoVegan) {
    console.log('Only offer up vegan dishes.');
    
}else if (isGuesOneVegan || isGuesTwoVegan) {
    console.log('Make sure to offer up some vegan options.');
    
}else{
    console.log('Offer anything on the menu.');
    
}
