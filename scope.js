//Lexical Scope(Static Scope)

//Global Scope -defined outside of all code block
//Local Scope - defined inside of the block
//IN a scope you can access variable defined in that scope, or in any parent/ancestor scope
let varOne='varOne' //This is global scope
if (true) {
    console.log(varOne);
    let varTwo = 'varTwo' //local scope
    console.log(varTwo);
    if (true) {
        let varFour ='varFour'//local scope
        
    }
}


if (true) {
    let varThree='varThree' //Local scope
}

console.log('varTwo');



