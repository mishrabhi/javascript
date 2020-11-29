//Higher order functions is a function that does atleast one of the following:

//1.Takes one or more function as a argument.
//2.Returns a function as a ResultTakes.


//Inner(Private) functions:

//Bearing in mind that a function is just like any other value,there's nothing that stops you from defining a function inside another function,here's the exmple:

function outer(parameter) {
    function inner(theinput) {
        return theinput * 2;
    }
    return 'The result is ' + inner(parameter);
}

//Using a function expression this can also be written as follows:

var outer = function (parameter) {
    var inner = function (theinput) {
        return theinput * 2;
    };
    return 'The result is' + inner(parameter);
}

//When you call a global (outer)function, it will internally call the (inner)function. As inner() is local, it's not accessible outside outer(), so you can say its a private function.

outer(2); //"The result is 4"
outer(8); //"The result is 16"
inner(2); //ReferenceError: inner is not defined.

//Benefits of using Private Functions:

//1.You can keep the global namespace clean, which is less likely to cause namimg collisions.
//2.Privacy-You can expose only those functions to the outside world that you decide, and keep the functionality that is not meant to be consumed by the rest of application to yourself.

